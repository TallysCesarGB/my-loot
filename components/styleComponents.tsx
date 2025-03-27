import styled from "styled-components/native";

export const Container = styled.View``;

export const HeaderComponent = styled.SafeAreaView`
  width: 100%;
  max-height: 60px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 16px;
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  color: #121212;
  margin-left: 8px;
`;

export const ButtonDrawer = styled.TouchableOpacity`
  alignitems: center;
  justifycontent: center;
`;

export const ListCardsBalance = styled.FlatList`
  max-height: 180px;
`;

export const LabelCard = styled.Text``;
