import styled from 'styled-components';
import enabled from '~/assets/images/google_signin_buttons/btn_google_dark_normal_ios.svg';
import pressed from '~/assets/images/google_signin_buttons/btn_google_dark_pressed_ios.svg';
export const Container = styled.button`
  width: 50px;
  height: 50px;
  background-color: none;
  border:none;
  background-image: url(${enabled});
  &:focus {
    background-image: url(${pressed});
  }
`;
