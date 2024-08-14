import starImg from "/images/star.png";

const CleanScoreIcon = ({ cleanScore }: { cleanScore: number }) => {
  const stars = [];
  for (let i = 0; i < cleanScore; i++) {
    stars.push(<img key={i} src={starImg} alt="score" className="w-1/5"/>);
  }
  return <div className="flex flex-row justify-center">{stars}</div>;
};

export default CleanScoreIcon;
