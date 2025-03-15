import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: #f0f4ff;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 24px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  width: 90%;
  font-size: 18px;
  padding: 12px;
  border-radius: 8px;
  color: #121212;
`;

export const SubmitButton = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: #3b3dbf;
  width: 90%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const LinkText = styled.Text`
  color: #171717;
  font-size: 16px;
`;
