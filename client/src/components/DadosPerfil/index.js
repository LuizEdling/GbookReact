import { useContext, useState } from 'react';
import './DadosPerfil.css';

import { AuthContext } from '../../context/auth';

import { db, storage } from '../../config/firebaseConnection';
import { doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { toast } from 'react-toastify';

import avatar from '../../assets/images/perfil-semfoto.jpg';

export default function Profile() {
  const { user, storageUser, setUser, logout } = useContext(AuthContext);

  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
  const [imageAvatar, setImageAvatar] = useState(null);

  const [nome, setNome] = useState(user && user.nome);
  const instituicao = user?.instituicao || "";

  function handleFile(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === 'image/jpeg' || image.type === 'image/png') {
        setImageAvatar(image);
        setAvatarUrl(URL.createObjectURL(image));
      } else {
        toast.error("Envie uma imagem do tipo PNG ou JPEG");
        setImageAvatar(null);
        return;
      }
    }
  }


  async function handleUpload() {
    const currentUid = user.uid;
    const uploadRef = ref(storage, `images/${currentUid}/${imageAvatar.name}`);
  
    try {
      const snapshot = await uploadBytes(uploadRef, imageAvatar);
      const downloadURL = await getDownloadURL(snapshot.ref);
  
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, {
        avatarUrl: downloadURL,
        nome: nome,
      });
  
      let data = {
        ...user,
        nome: nome,
        avatarUrl: downloadURL,
      };
  
      setUser(data);
      storageUser(data);
      toast.success("Atualizado com sucesso!");
    } catch (error) {
      toast.error("Erro ao fazer upload da imagem!");
    };
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (imageAvatar === null && nome !== '') {
      // Atualizar apenas o nome do user
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, {
        nome: nome,
      })
        .then(() => {
          let data = {
            ...user,
            nome: nome,
          };
          setUser(data);
          storageUser(data);
          toast.success("Atualizado com sucesso!");
        });

    } else if (nome !== '' && imageAvatar !== null) {
      // Atualizar tanto nome quanto a foto
      handleUpload();
    }

  }

  return (
    <div className="profile-content">
      <div className="container">
        <div className='top'>
          <span><b>{instituicao}</b></span>
          <button className="logout-btn" onClick={() => logout()}>Sair</button>
        </div>
        <form className="form-profile" onSubmit={handleSubmit}>
          <label className="label-avatar">
            <input 
              type="file" accept="image/*" onChange={handleFile} 
            /> 
            <br/>

            {avatarUrl === '' ? (
              <img src={avatar} alt="Foto de perfil" width={250} height={250} />
            ) : (
              <img src={avatarUrl} alt="Foto de perfil" width={250} height={250} />
            )}
          </label>

          <label>Nome</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

          <button type="submit">Salvar</button>
        </form>

      </div>

    </div>
  )
}