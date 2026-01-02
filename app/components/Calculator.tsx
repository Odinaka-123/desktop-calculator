"use client";

import { useState } from "react";

export default function Calculator() {
  const [value, setValue] = useState<string>("");

  const press = (v: string) => {
    if (v === "C") return setValue("");
    if (v === "±") return setValue(value ? String(-parseFloat(value)) : "");
    if (v === "√")
      return setValue(value ? String(Math.sqrt(parseFloat(value))) : "");
    setValue(value + v);
  };

  const calculate = () => {
    try {
      // Replace symbols for JS evaluation
      const expr = value
        .replace(/÷/g, "/")
        .replace(/×/g, "*")
        .replace(/\^/g, "**");

      setValue(Function(`"use strict"; return (${expr})`)());
    } catch {
      setValue("Error");
    }
  };

  const handleClick = (b: string) => {
    if (b === "=") return calculate();
    press(b);
  };

  const buttons = [
    "C",
    "(",
    ")",
    "±",
    "7",
    "8",
    "9",
    "÷",
    "4",
    "5",
    "6",
    "×",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "%",
    "+",
    "√",
    "^",
    "=",
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-xl w-80 shadow-lg">
      <label htmlFor="display" className="sr-only">
        Calculator display
      </label>
      <input
        id="display"
        value={value}
        readOnly
        className="w-full mb-4 p-2 text-right text-xl rounded bg-black text-white"
      />

      <div className="grid grid-cols-4 gap-2">
        {buttons.map((b) => (
          <button
            key={b}
            onClick={() => handleClick(b)}
            className={`py-2 rounded text-white ${
              ["C", "="].includes(b)
                ? "bg-red-600 hover:bg-red-500"
                : ["÷", "×", "-", "+", "%", "^", "√", "±"].includes(b)
                ? "bg-orange-600 hover:bg-orange-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}
