# Step-2.-Week-1
카카오 테크 캠퍼스 2단계 - FE - 1주차 클론 과제
</br>
</br>
## **과제명**
```
1. 쇼핑몰 웹사이트 탐색을 통한 페이지 구성
2. UI 컴포넌트의 명칭과 사용법 익히기
```
</br>

## **과제 설명**

✅**과제 1.**
#페이지 별 구성
1. 로그인 페이지
- 핵심 기능 : 로그인 요청 및 사용자 로그인 정보 저장
- 기능 상세 설명 : 이메일과 비밀번호를 이용해 로그인을 진행하고, 이에 대한 상태 처리를 한다. 또한 회원가입과 계정이나 비밀번호를 찾을 수 있는 페이지로 연결한다.

- 인터페이스 요구사항 : 이메일 또는 비밀번호에 들어온 값이 적합하지 않을 경우 적절한 알림을 보낸다


2. 메인 페이지
- 핵심 기능 : 프로모션이나 새로운 제품을 강조하여 보여주기, 다른 페이지로 이동할 수 있는 ui 구현
- 기능 상세 설명 : 
-- 사용자의 관심을 끌기 위한 정보를 상단에 캐러셀 형태로 구현한다. 
-- 제품의 목록과 이미지를 표시하여 추천제품이나 인기 제품들을 스크롤하며 살펴볼 수 있어야 한다.
-- 제품 카테고리를 고를 수 있는 기능과 원하는 제품을 검색하는 기능이 있어야 한다.
-- 장바구니나 배송정보, 로그인과 같이 필요한 기능을 알아보기 쉽게 적절한 위치에 배치하여야 한다.
- 인터페이스 요구사항:
-- 메인페이지는 사용자가 처음으로 만나는 화면이므로, 빠른 페이지 로딩속도나 직관적인 UI 배치가 필요하다.
-- 다양한 기기에 맞추어 반응형 디자인을 갖추는 것이 필요하다.
-- 장바구니나 배송정보 아이콘을 클릭하였을 때, 로그인이 되어있지 않다면 로그인 창으로 유도한다.
-- UI에 마우스를 가져다놓았을 때 적절한 효과를 주어 강조시킨다.


3. 상품 검색 결과 페이지
- 핵심 기능 : 검색어에 관련된 상품 목록 표시
- 기능 상세 설명 : 검색어에 관련된 상품들을 표시하고 다양한 필터를 통해 더 자세한 결과도 출력할 수 있어야 한다.
- 인터페이스 요구사항 : 
-- 검색 첫 페이지에 인기키워드를 표시하고, 특가나 이벤트 관련 키워드는 눈에 잘 띄는 색상으로 표시한다.
-- 검색 첫 페이지에 최근 검색했던 키워드를 표시한다.
-- 키워드를 입력하는 중에는 입력한 것과 연관된 키워드를 보여준다.
-- 검색이 완료되고, 최종 검색 결과와 연관된 키워드를 검색창 밑에 표시한다.
-- 가격과 카테고리 필터를 통해 더 자세한 검색이 가능하도록 한다.

4. 개별 상품 상세 페이지
- 핵심 기능 : 개별 상품의 정보와 구매수량, 예상금액을 보여준다.
- 기능 상세 설명 : 해당 상품의 간략한 정보(별점, 가격, 사진, 배송비)를 위에 표시하고 아래에 해당 상품의 상세 정보를 스크롤하며 확인할 수 있어야 한다. 또한 해당 상품의 수량을 선택하고 주문목록에 담거나 결제창으로 넘겨야 한다.
- 인터페이스 요구사항 : 
-- 가장 위에는 해당 물건을 파는 스토어를 표시하여야 한다.
-- 수량을 선택하거나 장바구니, 결제 관련 ui를 선택했을 때 로그인이 되어있지 않은 상태라면, 로그인창으로 유도한다.
-- 처음으로 보게 되는 부분에는 제목, 가격, 별점, 사진, 주문으로 간결하게 한 눈에 들어오게 구성한다.
-- 해당 상품에 대한 상세정보나, 리뷰, 문의사항등은 탭을 나누어 스크롤 하여 볼 수 있게 구성한다.
-- 옵션 선택이 있는 상품의 경우, 재고가 없으면 선택할 수 없게 한다. 이미 선택한 옵션도 다시 선택할 수 없게 한다.
-- 선택한 상품에 대해 수량을 조절할 수 있어야 한다.



5. 주문 내역 페이지
- 핵심 기능 : 6개월 내의 주문내역을 보여준다.
- 기능 상세 설명 : 전체 주문내역, 배송/발송진행 중인 상품, 취소/교환/반품한 상품, 구매 결정을 한 상품의 탭을 따로 따로 나눠서 보여준다.
- 인터페이스 요구사항 : 
-- 좀 더 자세하게 가간을 설정하여 볼 수 있는 상세 주문 내역 페이지로 이동하는 ui가 있어야 한다.

6. 결제 페이지
- 핵심 기능 : 주문 목록에 있는 상품들을 결제하고 배송하기 위해 필요한 정보를 입력받는다.
- 기능 상세 설명 : 주문 상품이 배송될 곳을 입력하는 기능, 주문하는 상품 가격, 배송비 가격, 할인가격 등을 통한 최종 결제금액을 표시하여야 한다. 이 결제 금액을 결제할 수단을 선택하는 기능 또한 구현되어야 한다.
- 인터페이스 요구사항 : 
-- 기존 선택할 수 있는 배송지가 없다면, 배송지를 입력하고, 여러 배송지가 있다면 신규로 추가하거나 혹은 기존 배송지에서 선택할 수 있게 한다
-- 주문 상품 정보를 간단하게 표시한다.
-- 들어가는 금액과 할인 금액의 색상을 대비하여 표현하고, 최종 결제 금액은 굵게 표시한다.
-- 결제하기 버튼은 눈에 잘 띄는 색상으로 주위보다 눈에 띄게 하여야 한다.


7. 장바구니 페이지
- 핵심 기능 : 장바구니에 넣은 상품들을 한번에 보여주고 최종 가격을 보여준다.
- 기능 상세 설명 : 각각의 상품들에 대해 수량 조절 혹은 삭제, 그리고 가격을 보여주고 결제페이지로 이동하는 기능
- 인터페이스 요구사항 : 
-- 장바구니에 담은 물품 중 일부만 선택하여 결제할 수 있게 구성한다.
-- 각각의 물품의 수량 조절, 삭제, 일괄삭제 등의 기능을 사용할 수 있어야 한다.


#디렉터리 구조
- public
- src
- components
- hooks
- routes
- styles
- dto
- ...


</br>

✅**과제 2.**

```
프론트 개발자가 다른 프론트 개발자와 소통 및 UI 디자이너와 소통하는데 필수적인 UI 컴포넌트의 명칭과 사용법을 익힙니다.
수업시간에 배운 컴포넌트의 명칭과 사용법 이외에 대표적인 UI 라이브러리 홈페이지를 조사해보면 수많은 컴포넌트가 어떤식으로 동작하는지 확인할 수 있습니다.
리액트 프로젝트를 생성하고, 토스트, 브래드크럼, 캐러셀, 라디오버튼, 토글버튼, 체크리스트를 UI 라이브러리가 아닌 자신만의 방식으로 스타일링하고 상태 관리를 적용해 코드를 작성하세요.
작성된 코드는 레퍼지토리에 업로드하여 멘토님에게 전달해주세요.
```

</br>

✅**과제 3.**

```
각 컴포넌트를 시현해 볼 수 있는 페이지를 만드세요. 
하나의 페이지에 모든 컴포넌트를 둬도 좋고, 각 페이지별로 분리해도 괜찮습니다.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**
```
1. README.md 파일은 동료 개발자에게 프로젝트에 쉽게 랜딩하도록 돕는 중요한 소통 수단입니다. 
해당 프로젝트에 대해 아무런 지식이 없는 동료들에게 설명하는 것처럼 쉽고, 간결하게 작성해주세요.

2. 좋은 개발자는 디자이너, 기획자, 마케터 등 여러 포지션에 있는 분들과 소통을 잘합니다. 
UI 컴포넌트의 명칭과 이를 구현하는 능력은 필수적인 커뮤니케이션 스킬이자 필요사항이니 어떤 상황에서 해당 컴포넌트를 사용하면 좋을지 고민하며 코드를 작성해보세요.
```
</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**
**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

>- PR 제목 : 부산대FE_라이언_1주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분
