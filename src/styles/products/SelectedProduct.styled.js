import styled from 'styled-components';
import { size } from '../BreakPoints';

export const Wrapper = styled.div`
  max-width: ${size.lg};
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 80%;
  height: 90vh;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 300;
  margin: 0 0 20px;
`;
export const Description = styled.p`
  width: 80%;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.2;
  margin: 0 0 20px;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px;
`;

export const PriceTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 0 15px 0 0;
`;

export const Price = styled.div`
  font-size: 24px;
  font-weight: 400;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px;
`;
export const FilterTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 0 15px 0 0;
`;

export const FilterColorContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const FilterColor = styled.div`
  width: 25px;
  height: 25px;
  margin: 0 10px 0 0;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  cursor: pointer;
`;

export const AmountContainer = styled.div``;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 30px;
`;
export const QuantityTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 0 15px 0 0;
`;

export const ChangeQuantityBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  font-weight: 500;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
`;

export const Amount = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin: 0 10px;
`;

export const AddToCart = styled.button`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;
