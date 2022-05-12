import * as S from "./Payment.styles";

// const arr = [
//   { optionCode: 1, optionNumber: 1, optionPrice: 100000 },
//   { optionCode: 2, optionNumber: 1, optionPrice: 10000 },
//   { optionCode: 3, optionNumber: 5, optionPrice: 10000 },
// ];

export default function PaymentPresenter() {
    return (
        <S.Wrapper>
            <S.PaymentWrapper>
                <S.PaymentText>결제하기</S.PaymentText>
                <S.PaymentMainWrapper>
                    <S.PaymentMainImage
                        style={{ display: "block" }}
                    ></S.PaymentMainImage>

                    <S.PaymentPriceWrapper>
                        <S.PaymentPriceTitle>
                            컬러풀 키보드 포 디자이너
                        </S.PaymentPriceTitle>

                        <S.PaymentPriceTableWrapper>
                            <S.PaymentPriceTableText>
                                적용한 커스텀 옵션
                            </S.PaymentPriceTableText>
                            <S.Row>
                                <S.ColumnTitle>옵션명</S.ColumnTitle>
                                <S.ColumnNumber>수량</S.ColumnNumber>
                                <S.ColumnPrice>가격</S.ColumnPrice>
                            </S.Row>
                            <S.Row2>
                                <S.ColumnTitle>기본 키보드</S.ColumnTitle>
                                <S.ColumnNumber>1</S.ColumnNumber>
                                <S.ColumnPrice
                                    style={{
                                        textAlign: "right",
                                        paddingRight: "30px",
                                    }}
                                >
                                    20,000
                                </S.ColumnPrice>
                            </S.Row2>
                            <S.Row2>
                                <S.ColumnTitle>스페이스 색 변경</S.ColumnTitle>
                                <S.ColumnNumber>1</S.ColumnNumber>
                                <S.ColumnPrice
                                    style={{
                                        textAlign: "right",
                                        paddingRight: "30px",
                                    }}
                                >
                                    20,000
                                </S.ColumnPrice>
                            </S.Row2>
                            <S.Row2>
                                <S.ColumnTitle>자판 색 변경</S.ColumnTitle>
                                <S.ColumnNumber>1</S.ColumnNumber>
                                <S.ColumnPrice
                                    style={{
                                        textAlign: "right",
                                        paddingRight: "30px",
                                    }}
                                >
                                    20,000
                                </S.ColumnPrice>
                            </S.Row2>
                        </S.PaymentPriceTableWrapper>

                        <S.PaymentPriceTotalWrapper>
                            <S.PaymentPriceTotal>합계</S.PaymentPriceTotal>
                            <S.PaymentPriceTotalNumber>
                                120,000<span>원</span>
                            </S.PaymentPriceTotalNumber>
                        </S.PaymentPriceTotalWrapper>
                    </S.PaymentPriceWrapper>
                </S.PaymentMainWrapper>

                <S.PaymentSubWrapper>
                    <S.PaymentSubLeftWrapper>
                        <S.PaymentSubAddressText>
                            배송지 정보
                        </S.PaymentSubAddressText>
                        <S.PaymentSubTextWrapper>
                            <S.Label>수령인</S.Label>
                            <S.InputBox
                                type="text"
                                placeholder="홍길동"
                                style={{ width: 379 }}
                            ></S.InputBox>
                        </S.PaymentSubTextWrapper>

                        <S.PaymentSubTextWrapper>
                            <S.Label>연락처</S.Label>
                            <S.InputBox
                                type="text"
                                placeholder="010"
                                style={{
                                    width: 80,
                                    textAlign: "center",
                                    padding: "0px",
                                }}
                            ></S.InputBox>
                            <div
                                style={{
                                    width: "16px",
                                    borderBottom: "2px solid #c4c4c4",
                                    margin: "10px",
                                }}
                            />
                            <S.InputBox
                                type="text"
                                placeholder="1234"
                                style={{
                                    width: 113,
                                    textAlign: "center",
                                    padding: "0px",
                                }}
                            ></S.InputBox>

                            <div
                                style={{
                                    width: "16px",
                                    borderBottom: "2px solid #c4c4c4",
                                    margin: "10px",
                                }}
                            />
                            <S.InputBox
                                type="text"
                                placeholder="5678"
                                style={{
                                    width: 113,
                                    textAlign: "center",
                                    padding: "0px",
                                }}
                            ></S.InputBox>
                        </S.PaymentSubTextWrapper>

                        <S.PaymentSubTextWrapper>
                            <S.Label>배송지명</S.Label>
                            <S.InputBox
                                type="text"
                                placeholder="우리집"
                                style={{ width: 262 }}
                            ></S.InputBox>
                        </S.PaymentSubTextWrapper>

                        <S.PaymentSubTextWrapper>
                            <S.Label>배송 주소</S.Label>

                            <S.InputBox
                                type="text"
                                placeholder="15338"
                                style={{ width: 116 }}
                            ></S.InputBox>

                            <S.ZipCodeSearchButton>
                                우편 번호 찾기
                            </S.ZipCodeSearchButton>
                        </S.PaymentSubTextWrapper>

                        <S.PaymentSubTextWrapper>
                            <S.Label>{""}</S.Label>

                            <S.InputBox
                                type="text"
                                placeholder="경기도 안산시 단원구"
                                style={{ width: 541 }}
                            ></S.InputBox>
                        </S.PaymentSubTextWrapper>
                        <S.PaymentSubTextWrapper>
                            <S.Label>{""}</S.Label>

                            <S.InputBox
                                type="text"
                                placeholder="당곡2로 29"
                                style={{ width: 541 }}
                            ></S.InputBox>
                        </S.PaymentSubTextWrapper>
                    </S.PaymentSubLeftWrapper>

                    <S.PaymentSubRightWrapper>
                        <S.PaymentSubResultText>
                            결제 상세
                        </S.PaymentSubResultText>
                        <S.OrderPriceWrapper
                            style={{
                                marginBottom: "61px",
                            }}
                        >
                            <S.Label
                                style={{ fontWeight: "700", fontSize: "20px" }}
                            >
                                주문금액
                            </S.Label>
                            <S.LabelText
                                style={{ fontWeight: "700", fontSize: "32px" }}
                            >
                                120,000
                            </S.LabelText>
                        </S.OrderPriceWrapper>

                        <S.OrderPriceWrapper>
                            <S.Label
                                style={{
                                    fontWeight: "400",
                                    fontSize: "18px",
                                    paddingLeft: "30px",
                                }}
                            >
                                상품금액
                            </S.Label>
                            <S.LabelText>120,000</S.LabelText>
                        </S.OrderPriceWrapper>
                        <S.OrderPriceWrapper>
                            <S.Label
                                style={{
                                    fontWeight: "400",
                                    fontSize: "18px",
                                    paddingLeft: "30px",
                                }}
                            >
                                할인
                            </S.Label>
                            <S.LabelText>0</S.LabelText>
                        </S.OrderPriceWrapper>
                        <S.OrderPriceWrapper style={{ marginBottom: "46px" }}>
                            <S.Label
                                style={{
                                    fontWeight: "400",
                                    fontSize: "18px",
                                    paddingLeft: "30px",
                                }}
                            >
                                배송비
                            </S.Label>
                            <S.LabelText>무료</S.LabelText>
                        </S.OrderPriceWrapper>
                        <S.Line></S.Line>
                        <S.PaymentSubmitButton>결제하기</S.PaymentSubmitButton>
                    </S.PaymentSubRightWrapper>
                </S.PaymentSubWrapper>
            </S.PaymentWrapper>
        </S.Wrapper>
    );
}