const configs: {
  state: {
    [key: string]: string;
  };
} = {
  state: {
    primary:
      "border-2 border-transparent bg-purple hover:bg-navy focus:bg-navy active:bg-navy text-white",
    secondary:
      "border-2 border-soft-purple2 bg-soft-purple text-purple hover:border-transparent hover:bg-navy focus:bg-navy active:bg-navy hover:text-white",
    alternative: "",
    disabled: "border-2 border-transparent bg-soft-grey text-grey",
    loading: "border-2 border-transparent bg-soft-grey text-grey",
  },
};

export default configs;
