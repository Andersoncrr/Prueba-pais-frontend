import React, { useCallback, useEffect } from "react";
import Select from "react-select";
import { countrys } from "../https/countrys";

const options = [{ value: "", label: "", flag: "" }];

export const Dropdown = ({ onchangeSelect, defaultValue }) => {
  const optionsSelect = useCallback(async () => {
    const country = await countrys();
    country.data.map((item) =>
      options.push({
        value: item.name.common,
        label: item.name.common,
        flag: item.flags.png,
      })
    );
    orderData();
  }, []);

  const orderData = () => {
    options.sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });
  };

  useEffect(() => {
    optionsSelect();
  }, [optionsSelect]);

  return (
    <Select
      className="Dropdown"
      value={defaultValue}
      onChange={onchangeSelect}
      options={options}
      placeholder="Elige un país"
    />
  );
};
