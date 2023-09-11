import { number, oneOf } from "prop-types";

export const availableCurrencies = ["USD", "EUR"];

/**
 * Price
 *
 * @param {Object} props
 * @param {number} props.value Price value
 * @param {string} props.currency Price currency
 * @returns {React.ReactElement}
 */
export default function Price({ value, currency = "EUR" }) {
  return new Intl.NumberFormat(window.navigator.language, {
    style: "currency",
    currency,
  }).format(value);
}

Price.propTypes = {
  value: number,
  currency: oneOf(availableCurrencies),
};
