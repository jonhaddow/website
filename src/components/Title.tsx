interface TitleProps {
  title: string;
  subText?: string | null;
}

export const Title = ({ title, subText }: TitleProps) => (
  <h2 className="mx-auto w-full max-w-2xl p-0 pb-6 text-center text-5xl font-bold text-header-text md:text-left">
    {title}
    {subText && (
      <span className="block pt-4 text-sm font-normal tracking-wider">
        {subText}
      </span>
    )}
  </h2>
);
