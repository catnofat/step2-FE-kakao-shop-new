import { useMutation } from "react-query";
import { comma } from "../../utils/convert";
import { order } from "../../services/order";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const OrderTemplate = ({ data }) => {
  const { products, totalPrice } = data?.data?.response;
  const navigate = useNavigate();
  const [agreePayment, setAgreePayment] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  const allAgreeRef = useRef(null);
  const agreePaymentRef = useRef(null);
  const agreePolicyRef = useRef(null);

  // All-agree
  const handleAllAgree = (e) => {
    const value = e.target.checked;
    setAgreePayment(value);
    setAgreePolicy(value);
  };

  // part-agree
  const handleAgreement = (e) => {
    const { name, checked } = e.target;

    if (name === "payment-agree") {
      setAgreePayment(checked);
    } else if (name === "policy-agree") {
      setAgreePolicy(checked);
    }
  };

  const { mutate } = useMutation({
    mutationKey: "order",
    mutationFn: order,
  });

  //목표
  //상품명을 적절하게 표기
  // 그에 따라, 가격, 수량

  // products  안 에 있는 item
  // `${item.productName} - ${item.carts[0].option.optionName}`
  // 1개당 가격 : item.carts[0].price * item.carts[0].quantity

  const OrderItems = () => {
    let renderComponent = [];
    if (Array.isArray(products) === false) return;

    products.forEach((item) => {
      renderComponent.push(
        item.carts.map((cart) => {
          return (
            <div key={cart.id} className="p-4 border-t">
              <div className="product-name font-bold">
                <span>{`${item.productName}-${cart.option.optionName}`}</span>
              </div>
              <div className="quantity">
                <span>{comma(cart.quantity)}개</span>
              </div>
              <div className="price font-bold">
                <span>{comma(cart.price * cart.quantity)}</span>
              </div>
            </div>
          );
        })
      );
      //item : 각 상품,
    });

    return renderComponent;
  };

  return (
    <div className="py-20">
      <div className="block mx-auto max-w-[1024px] w-[100%]">
        <div className="border py-2">
          <h1 className="text-sm font-bold">주문하기</h1>
        </div>
        <div className="border py-4">
          <h2 className="test-sm font-bold">배송지 정보</h2>
        </div>
        <div className="border py-4">
          <div className="flex items-center gap-4">
            <span>홍길동</span>
            <span className="text-blue-400 bg-blue-100 rounded-md text-xs p-1 ">
              기본배송지
            </span>
          </div>
        </div>
        <div className="border p-4">
          <span>010-0000-0000</span>
        </div>
        <div className="border p-4">
          <span>주소명입니다</span>
        </div>
        <div className="border p-4">
          <h2>주문상품 정보</h2>
        </div>
        {/* 각 주문의 정보 */}
        <OrderItems />

        {/* 총 주문 금액 */}
        <div className="border p-4 flex item-center justify-between">
          <h3 className="font-bold text-xl">총 주문 금액</h3>
          <span className="price text-xl text-indigo-700">
            {comma(totalPrice)}원
          </span>
        </div>
        {/* 전체 동의, 구매조건 확인 및 결제 진행 동의 */}
        <div className="flex flex-col p-4 gap-4">
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="all-agree"
              ref={allAgreeRef}
              checked={agreePayment && agreePolicy}
              onChange={handleAllAgree}
            />
            <label
              htmlFor="all-agree"
              className="text-sm font-bold whitespace-nowrap"
            >
              전체 동의
            </label>
          </div>
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="agree"
              name="payment-agree"
              ref={agreePaymentRef}
              checked={agreePayment}
              onChange={handleAgreement}
            />
            <label htmlFor="agree" className="text-sm whitespace-nowrap">
              구매조건 확인 및 결제 진행 동의
            </label>
          </div>
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="policy"
              name="policy-agree"
              ref={agreePolicyRef}
              checked={agreePolicy}
              onChange={handleAgreement}
            />
            <label htmlFor="agree" className="text-sm whitespace-nowrap">
              개인정보 제 3자 제공동의
            </label>
          </div>
          {/* 결제하기 버튼 */}
          <button
            onClick={() => {
              // 동의가 이뤄지지 않았을 경우 처리
              if (agreePayment === false || agreePolicy === false) {
                alert("모든 항목에 동의가 필요합니다.");
                return;
              }

              mutate(null, {
                onError: () => {
                  alert("주문에 실패하였습니다.");
                },
                onSuccess: (res) => {
                  console.log(res);
                  const id = res.data.response.id;
                  alert("주문이 완료되었습니다.");
                  navigate(`/order/complete/${id}`);
                },
              });
              //POST /orders/save
              //DB : 장바구니에 있는 모든 항목이 결제로 저장
              //장바구니는 비워짐
              // 페이지 이동 => 주문완료 페이지(리턴 받은 주문 아이디)
              // /orders/complet/:id
            }}
            className={`w-full p-4 font-medium 
              ${
                agreePayment && agreePolicy
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-300 text-gray-500"
              }`}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTemplate;

//h1 : 검색엔진