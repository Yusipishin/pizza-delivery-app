const PromocodeForm = () => {
  return (
    <form method="get" className="border-[1.5px] rounded-xl border-solid inline-block">
      <input
        className="px-6"
        type="text"
        placeholder="Введите промокод"
        name="promocode"
      />
      <button className="bg-yel py-3 px-7" type="submit">
        Применить
      </button>
    </form>
  )
};

export default PromocodeForm;
