import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { SearchType } from "../types/SearchTypes";
import { defaultSearch, searchSchema } from "../types/SearchTypes";

const useSearchForm = () => {
  const { register: searchRegister, watch: searchOption } = useForm<SearchType>(
    {
      resolver: zodResolver(searchSchema),
      defaultValues: defaultSearch,
    }
  );
  return { searchRegister, searchOption };
};

export default useSearchForm;
