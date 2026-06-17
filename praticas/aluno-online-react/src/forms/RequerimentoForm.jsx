import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './RequerimentoForm.css';

function getCurrentDate() {
  return new Intl.DateTimeFormat('pt-BR').format(new Date());
}

function RequerimentoForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tipo: '',
      descricao: '',
      dataRequerimento: getCurrentDate(),
    },
  });

  function onSubmit(data) {
    console.log('Novo requerimento:', data);
    reset({
      tipo: '',
      descricao: '',
      dataRequerimento: getCurrentDate(),
    });
  }

  function handleCancel() {
    reset({
      tipo: '',
      descricao: '',
      dataRequerimento: getCurrentDate(),
    });
    navigate('/requerimentos');
  }

  return (
    <section className="requerimento-form-page">
      <h2>Novo Requerimento</h2>

      <form className="requerimento-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="requerimento-field">
          <label htmlFor="tipo">Tipo de Requerimento</label>
          <select
            id="tipo"
            {...register('tipo', {
              required: 'Tipo \u00e9 obrigat\u00f3rio',
            })}
          >
            <option value="">Selecione um tipo...</option>
            <option value="Revisao de Mencao">Revisao de Mencao</option>
            <option value="Dispensa de Disciplina">Dispensa de Disciplina</option>
            <option value="Trancamento de Matricula">Trancamento de Matricula</option>
            <option value="Mudanca de Turno">Mudanca de Turno</option>
            <option value="Renovacao de Matricula">Renovacao de Matricula</option>
          </select>
          {errors.tipo && <span className="requerimento-error">{errors.tipo.message}</span>}
        </div>

        <div className="requerimento-field">
          <label htmlFor="descricao">Descri&ccedil;&atilde;o</label>
          <textarea
            id="descricao"
            rows="6"
            {...register('descricao', {
              required: 'Descri\u00e7\u00e3o \u00e9 obrigat\u00f3rio',
              minLength: {
                value: 10,
                message: 'Descri\u00e7\u00e3o deve ter no m\u00ednimo 10 caracteres',
              },
            })}
          />
          {errors.descricao && (
            <span className="requerimento-error">{errors.descricao.message}</span>
          )}
        </div>

        <div className="requerimento-date-row">
          <label htmlFor="dataRequerimento">Data do Requerimento</label>
          <input
            id="dataRequerimento"
            type="text"
            readOnly
            {...register('dataRequerimento')}
          />
        </div>

        <div className="requerimento-actions">
          <button type="button" onClick={handleCancel}>
            Cancelar
          </button>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </section>
  );
}

export default RequerimentoForm;
