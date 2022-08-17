# 원티드 프리온보딩 사전 과제

## Tech Stack

<div>
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">
    <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
    <img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white">
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</div>

<br/>
<br/>

## 실행화면

### 로그인/회원가입

![로그인](https://user-images.githubusercontent.com/54847910/185144685-68618c18-8133-44cd-b1c6-a95165c92e25.gif)

#### Assignment1

-   이메일과 비밀번호의 유효성 검사기능을 구현해주세요
    -   :white_check_mark: 이메일 조건: @ 포함
    -   :white_check_mark: 비밀번호 조건: 8자 이상
    -   :white_check_mark: 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 해주세요

#### Assignment2

-   로그인 API를 호출하고, 올바른 응답을 받았을 때 /todo 경로로 이동해주세요
    -   :white_check_mark: 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
    -   :white_check_mark: 응답받은 JWT는 로컬 스토리지에 저장해주세요

<br/>

---

<br/>

### Url 전환

![링크전환](https://user-images.githubusercontent.com/54847910/185144728-918a00d5-973b-4e59-829c-114f68467d70.gif)

#### Assignment3

-   로그인 여부에 따른 리다이렉트 처리를 구현해주세요
    -   :white_check_mark: 로컬 스토리지에 토큰이 있는 상태로 / 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요
    -   :white_check_mark: 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 / 경로로 리다이렉트 시켜주세요

<br/>

---

<br/>

### TodoList

![Todo](https://user-images.githubusercontent.com/54847910/185136325-75e8e378-2649-45ac-9373-34817c4abce4.gif)

#### Assignment4

-   :white_check_mark: /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
-   :white_check_mark: 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다.
-   :white_check_mark: 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가되도록 해주세요

#### Assignment5

-   :white_check_mark: 투두 리스트의 수정, 삭제 기능을 구현해주세요
-   :white_check_mark: 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있도록 해주세요
-   :white_check_mark: 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있도록 해주세요
-   :white_check_mark: 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제되도록 해주세요
