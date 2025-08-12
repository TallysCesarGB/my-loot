import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f0f4ff;
  align-items: center;
`;

export const Message = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 24px;
`;

export const Name = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
  margin-top: 8px;
  padding: 0 16px;
  color: #121212;
`;

export const AddRegisterButton = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: #3b3dbf;
  width: 90%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const AddRegisterButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

export const LogoutButton = styled.TouchableOpacity`
  padding: 10px 20px;
  width: 90%;
  border-radius: 8px;
  border-width: 1px;
  border-color: #c62c36;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const LogoutButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #c62c36;
`;
