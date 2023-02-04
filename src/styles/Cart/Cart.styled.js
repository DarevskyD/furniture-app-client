import styled from 'styled-components';
import { theme } from '../Theme';
import { size } from '../BreakPoints';

export const Wrapper = styled.div`
  max-width: ${size.lg};
  margin: 0 auto;
  padding: 0 20px;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Title = styled.h2`
  margin: 0 0 20px;
  font-size: 30px;
  font-weight: 300;
  text-align: center;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 20px;
`;

export const TopButton = styled.button`
  padding: 10px 15px;
  font-size: 20px;
  font-weight: 300;
  background-color: ${({ color }) =>
    color === 'primary' ? theme.colors.primary : theme.colors.light};
  border: 1px solid
    ${({ color }) => (color === 'primary' ? theme.colors.primary : theme.colors.primary)};
  color: ${({ color }) => (color === 'primary' ? theme.colors.light : theme.colors.primary)}; ;
`;

export const TopWrapper = styled.div``;

export const ShoppingBag = styled.span`
  padding: 0 0 3px;
  margin: 0 20px 0 0;
  font-size: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const WishList = styled.span`
  padding: 0 0 3px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const Hr = styled.hr`
  background-color: ${({ theme }) => theme.colors.lightBg};
  border: none;
  height: 1px;
`;

export const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled.span`
  b {
    margin: 0 10px 0 0;
  }
`;

export const ProductId = styled.span`
  b {
    margin: 0 10px 0 0;
  }
`;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ color }) => color};
`;

export const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductAmount = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px;
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

export const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 400;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid ${({ theme }) => theme.colors.secondary};
  padding: 20px;
  height: 50vh;
  display: flex;
  flex-direction: column;
`;

export const SummaryTitle = styled.h2`
  font-weight: 400;
  margin: 0 0 20px 0;
`;

export const SummaryItem = styled.div`
  margin: 0 0 15px;
  display: flex;
  justify-content: space-between;
  font-weight: ${({ type }) => type === 'total' && '500'};
  font-size: ${({ type }) => type === 'total' && '24px'};
`;
export const SummaryItemText = styled.p``;
export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 20px;
  font-weight: 300;
  background-color: ${({ theme }) => theme.colors.additionalMd};
  border: 1px solid ${({ theme }) => theme.colors.additionalMd};
  color: ${({ theme }) => theme.colors.light};
  margin-top: auto;
`;