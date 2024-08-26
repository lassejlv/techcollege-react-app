// export default function Button({ children }: { children: React.ReactNode }) {
//   return (
//     <button className="bg-gray-500 hover:bg-gray-400 transition-colors ease-in-out duration-300 p-2 rounded-md text-sm ">
//       {children}
//     </button>
//   );
// }

import styled from 'styled-components';

export const Button = styled.button`
  background-color: #4d41a8;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #3e3489;
  }
`;
