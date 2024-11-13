import { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Importando o CSS para o estilo dos toasts
import './FormBook.css';

export default function FormBook() {
  const { user } = useContext(AuthContext);
  const [materia, setMateria] = useState("Geral");
  const [nome, setNome] = useState("");
  const [autor, setAutor] = useState("");
  const [desc, setDesc] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Função para mostrar o toast de erro
  const showError = (message) => {
    toast.error(message);
  };

  // Função para mostrar o toast de sucesso
  const showSuccess = () => {
    toast.success('Livro adicionado com sucesso!');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const newBook = {
      subject: materia,
      nome,
      autor,
      desc,
      pdfUrl,
    };

    try {
      const response = await fetch('http://localhost:8000/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erro no servidor: ${errorText}`);
      }

      const data = await response.json();
      console.log('Livro adicionado:', data);

      // Mostrar o toast de sucesso
      showSuccess();

      // Limpeza dos campos após sucesso
      setMateria("Geral");
      setNome("");
      setAutor("");
      setDesc("");
      setPdfUrl("");
    } catch (err) {
      // Mostrar o toast de erro
      showError(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Adicionar Livro</h2>
      <form onSubmit={handleSubmit} className="add-livro-form">
        <label>Matéria pertencente:</label>
        <select
          value={materia}
          onChange={(e) => setMateria(e.target.value)}
          required
        >
          <option value="Geral">Geral</option>
          {user.subjects?.map((subject, index) => (
            <option key={index} value={subject}>
              {subject}
            </option>
          ))}
        </select>

        <label>Nome do Livro:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label>Autor:</label>
        <input
          type="text"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          required
        />

        <label>Descrição:</label>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />

        <label>URL do PDF:</label>
        <input
          type="text"
          value={pdfUrl}
          onChange={(e) => setPdfUrl(e.target.value)}
          placeholder="https://linkdopdf.com"
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Adicionando...' : 'Adicionar Livro'}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
