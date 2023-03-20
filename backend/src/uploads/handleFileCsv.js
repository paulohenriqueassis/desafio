export default function handleFileCsv(fileCsv) {
  for (const card of fileCsv) {
    const splitTags = card.tags.split(";");
    card.tags = splitTags.map((tag) => ({ name: tag }));
    card.data_criacao = formatDate();
  }
  return fileCsv;
}

function formatDate() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formatUnitTime = (unit) => unit.toString().padStart(2, "0");
  const fullHour = `${formatUnitTime(hours)}:${formatUnitTime(
    minutes
  )}:${formatUnitTime(seconds)}`;

  const localeDate = date.toLocaleDateString("pt-BR", { timeZone: "UTC" });
  return `${localeDate} às ${fullHour}}`;
}
