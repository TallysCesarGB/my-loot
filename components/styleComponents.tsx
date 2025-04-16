import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: #f0f2f5;
`;

export const Container = styled.View`
  background-color: #${(props: any) => props.bg};
  width: 300px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 8px;
  padding-left: 16px;
  margin: 16px;
`;

export const HeaderComponent = styled.SafeAreaView`
  width: 100%;
  max-height: 64px;
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

export const LabelCard = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const Balance = styled.Text`
  font-size: 32px;
  color: #fff;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  width: 90%;
  font-size: 18px;
  padding: 12px;
  border-radius: 8px;
  color: #121212;
  margin-top: 8px;
  margin-bottom: 8px;
  align-self: center;
  height: 50px;
`;

export const SubmitButton = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: #00b94a;
  width: 90%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  align-self: center;
  height: 50px;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const RegisterContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 40px;
  margin-bottom: 16px;
`;

export const RegisterTypeButton = styled.TouchableOpacity`
  background-color: ${(props: any) => (props.checked ? "#fff" : "#e7e7e7")};
  width: 48%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1.5px solid
    ${(props: any) => (props.checked ? "#3b3dbf" : "transparent")};
  margin-bottom: 16px;
  height: 50px;
`;

export const RegisterTypeText = styled.Text`
  font-size: 18px;
  color: #121212;
  font-weight: bold;
  margin-left: 8px;
`;

export const MovimentsArea = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 16px;
  background-color: #fff;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;
export const MovimentsTitle = styled.Text`
  font-size: 20px;
  color: #121212;
  font-weight: bold;
  margin-left: 8px;
  margin-top: 8px;
`;
export const MovimentsList = styled.FlatList`
  flex: 1;
  background-color: #fff;
`;

export const ContainerMoviments = styled.View`
  background-color: #f0f3ff;
  border-radius: 8px;
  margin: 8px 16px;
  padding: 16px;
`;

export const TypeMoviments = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TypeMovimentsText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-style: italic;
  margin-left: 8px;
`;

export const IconView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props: any) =>
    props.type === "receita" ? "#00b94a" : "#c62c36"};
  padding: 4px 8px;
  border-radius: 8px;
`;

export const ValueMoviments = styled.Text`
  font-size: 24px;
  color: #121212;
  margin-top: 8px;
`;
