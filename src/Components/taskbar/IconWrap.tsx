type IconProps = {
  iconImg: string;
  title: string;
  classValue: string;
  onClick?: () => void;
};

const IconWrap = ({ iconImg, title, classValue, onClick }: IconProps) => {
  return (
    <div className={`Icon ${classValue}`} onClick={onClick}>
      <img width={40} src={iconImg} alt="" />
      <span>{title}</span>
    </div>
  );
};

export default IconWrap;
