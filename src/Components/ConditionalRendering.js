export default function ConditionalRendering(props) {
  const broj = props.broj;

  const muskaImena = ["Gojko", "Franjo", "Gerald"];
  const zenskaImena = ["Slavenka", "Roza", "Veselka"];

  if (broj < 10) {
    return (
      <div>
        Muška imena:
        {muskaImena.map((ime, i) => (
          <p className={`"name-${i+1}`} key={i}>{ime}</p>
        ))}
      </div>
    );
  } else if (broj >= 10) {
    return (
      <div>
        Ženska imena:
        {zenskaImena.map((ime, i) => (
          <p className={`"name-${i+1}`} key={i}>{ime}</p>
        ))}
      </div>
    );
  }

  return null;
}
