type FilterBlockProps = {
  title: string;
  children: React.ReactNode;
};

const FilterBlock: React.FC<FilterBlockProps> = ({ title, children }) => {
  return (
    <div>
      <div className="divider" />
      <h3 className="text-lg font-semibold">{title}</h3>
      {children}
    </div>
  );
};

export default FilterBlock;
