import * as S from "./Skeleton.styles";

const Skeleton = () => {
  return (
    <S.Wrapper>
      <S.Section>
        <S.Text />
        <S.Block />
      </S.Section>
      <S.Section>
        <S.Text />
        <S.Block />
      </S.Section>
      <S.ShimmerWrapper>
        <S.Shimmer />
      </S.ShimmerWrapper>
    </S.Wrapper>
  );
};

export default Skeleton;
