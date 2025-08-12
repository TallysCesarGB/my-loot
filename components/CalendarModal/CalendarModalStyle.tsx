import styled from "styled-components/native";

export const CalendarModalContainer = styled.View`
  flex: 1;
  background-color: rgba(34, 34, 34, 0.4);
`;

export const ModalContent = styled.View`
  flex: 2;
  background-color: #fff;
  border-radius: 10px;
  margin: 20px;
  justify-content: center;
  align-items: center;
  elevation: 5;
  shadow-color: #000;
`;

export const CalendarModalButton = styled.TouchableOpacity`
  background-color: #3b3dbf;
  border-radius: 8px;
  height: 44px;
  width: 90%;
  align-items: center;
  justify-content: center;
`;

export const CalendarModalText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
