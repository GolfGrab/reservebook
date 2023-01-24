type FilterBlockProps = {
  title: string;
  children: React.ReactNode;
};

const FilterBlock: React.FC<FilterBlockProps> = ({ title, children }) => {
  return (
    <>
      <div className="hidden lg:block">
        <div className="divider" />
        <h3 className="text-lg font-semibold">{title}</h3>
        {children}
      </div>
      <div className="block lg:hidden">
        <div className="collapse-plus collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">{title}</div>
          <div className="collapse-content">{children}</div>
        </div>
      </div>
    </>
  );
};

export default FilterBlock;
