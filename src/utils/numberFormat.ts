export default function numberFormat(value:number) {
  return Intl.NumberFormat().format(value);
}
