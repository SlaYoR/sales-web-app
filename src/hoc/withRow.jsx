export default function withRow(Component) {
  // eslint-disable-next-line react/prop-types
  const EnhancedComponent = ({ row }) => <Component {...row} />;
  return EnhancedComponent;
}

// eslint-disable-next-line react/prop-types
// const EnhancedComponent = ({ row }) => {
//   const { user } = useUser();
//   const { currency } = useSettings({ user });

//   return <Component {...row} currency={currency} />;
// };
