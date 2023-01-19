type BreakPoints = "desktop";

export const mq: { [key in BreakPoints]: string } = {
  desktop: "720",
};

Object.keys(mq).map((key) => {
  const bp = key as BreakPoints;
  mq[bp] = `@media (min-width: ${mq[bp]}px)`;
});
