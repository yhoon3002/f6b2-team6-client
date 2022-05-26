import SignUpPresenter from "./Signup.presenter";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { CREATE_USER, CHECK_EMAIL, SEND_TOKEN, CHECK_TOKEN } from './Signup.queries';
import { Modal } from "antd";

const schema = yup.object({
    name: yup
        .string()
        // .matches(/^[a-zA-Z0-9]/, "형식에 맞지 않습니다.")
        .required("이름은 필수 입력 사항입니다."),

    email: yup
        .string()
        .email("이메일 형식에 맞지 않습니다.")
        .required("이메일을 필수 입력 사항입니다."),

    nickName: yup
        .string()
        .max(8, "닉네임은 8글자 이내여야 합니다.")
        .required("닉네임은 필수 입력 사항입니다."),

    password: yup
        .string()
        .matches(/^[A-Za-z\d$@$!%*#?&]{8,20}$/, "비밀번호는 영문, 숫자, 특수문자를 포함한 16자리 이내 문자열이어야 합니다")
        .required("비밀번호는 필수 입력 사항입니다."),
    passwordCheck: yup
        .string()
        .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
        .required("비밀번호는 필수 입력 사항입니다."),

    // phone: yup
    //     .string()
    //     .matches(/^\d{3}\d{3,4}\d{4}$/, "'-'를 제외한 숫자만 입력해주세요.")
    //     .required("전화번호는 필수 입력 사항입니다."),
});

interface IFormValues {
    email: string;
    name: string;
    nickName: string
    password: string;
    passwordCheck: string;
}

export default function SignUpContainer() {
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [token, setToken] = useState("");
    const [isWrite, setIsWrite] = useState(false);
    const [isWrite2, setIsWrite2] = useState(false);
    const [isWriteEmail, setIsWriteEmail] = useState(false);
    const [isWritePhone, setIsWritePhone] = useState(false);
    const [isWriteToken, setIsWriteToken] = useState(false);

    const [passwordType, setPasswordType] = useState("password")
    const [passwordCheckType, setPasswordCheckType] = useState("password")
    const router = useRouter();
    const [createUser] = useMutation(CREATE_USER);
    const [checkEmail] = useMutation(CHECK_EMAIL);
    const [sendToken] = useMutation(SEND_TOKEN);
    const [checkToken] = useMutation(CHECK_TOKEN);

    const [isOpen, setIsOpen] = useState(false);
    const [zipCode, setZipCode] = useState("")
    const [address, setAddress] = useState("")
    const [addressDetail, setAddressDetail] = useState("")

    const [isStarted, setIsStarted] = useState(false)
    const [isDisabled, setIsDisabled] = useState(true)
    const [time, setTime] = useState(60)
    const [timer, setTimer] = useState(null)

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onChangeEmail = (event:any) => {
        if(event.target.value){
            setIsWriteEmail(true)
        }else{
            setIsWriteEmail(false)
        }
        // setEmail(event.target.value)
    } 

    const onChangePassword = (e: any) => {
        if (e.target.value) {
            setIsWrite(true);
        } else {
            setIsWrite(false);
        }
    };
    const onChangePasswordCheck = (e: any) => {
        if (e.target.value) {
            setIsWrite2(true);
        } else {
            setIsWrite2(false);
        }
    };

      const onChangePhone = (event:any) => {
            setPhone(event.target.value)
        //   console.log(event.target.value)
        //   console.log(phone)
        if(event.target.value){
            setIsWritePhone(true)
        }else{
            setIsWritePhone(false)
        }
    } 

    const onChangeAddressDetail = (event: any) => {
        setAddressDetail(event.target.value)
      }

    const onChangeToken = (event:any) => {
        setToken(event.target.value)
        if(event.target.value){
            setIsWriteToken(true)
        }else{
            setIsWriteToken(false)
        }
    }

    const onClickSignUp = async (data: IFormValues) => {
        try {
            const result = await createUser({
                variables: {
                    createUserInput: {
                        email: data?.email,
                        password: data?.password,
                        name: data?.name,
                        nickName: data?.nickName,
                        address: {
                            address,
                            addressDetail,
                            zipCode
                        }
                    },
                },
            });
            console.log(result);
            alert("성공");
            router.push("/");
        } catch (error: any) {
            alert("실패");
            console.log(JSON.stringify(error, null, 2));
        }
    }

    const onClickCheckEmail = async() => {
        try{
           const result = await checkEmail({variables:{email}})
            
           console.log(result,"result check email")
            Modal.success({content:"사용가능한 이메일입니다."})
        }catch(error:any){
            Modal.error({content:"사용할 수 없는 이메일입니다."})
        }
    }

    const onClickSendToken = async() => {
        try{
            await sendToken({variables:{phone}})

            if(!isStarted){
                setIsStarted(true)
                setInterval(function(){
                    if(time >= 0){
                        setTime((prev)=>(prev-1))
                        setIsDisabled(false)
                    }else{
                      setIsDisabled(true)
                      setIsStarted(false)
                      clearInterval()
                    }
                },1000)
                Modal.success({content:"인증번호를 전송하였습니다!"})

            }else{
                Modal.error({content:"타이머가 이미 동작중입니다."})
            }
        }catch(error:any){
            Modal.error({content:error.message})
        }
    }

    const onClickCheckToken = async () =>{
        try{
            const result = await checkToken({variables:{token}})
            console.log("result token",result)
            Modal.success({content:"인증을 성공하였습니다!"})
            setIsDisabled(true)
            setIsStarted(false)
            clearInterval()

        }catch(error:any){
            Modal.error({content:error.message})
        }
    }

    const togglePassword = () => {
        if(passwordType === "password"){
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const togglePasswordCheck = () => {
        if(passwordCheckType === "password"){
            setPasswordCheckType("text")
            return;
        }
        setPasswordCheckType("password")
    }


    // 주소 모달
    const showModal = () => {
        setIsOpen(true);
      };
    
      const handleOk = () => {
        setIsOpen(false);
      };
    
      const handleCancel = () => {
        setIsOpen(false);
      };
    
    
      const handleComplete = (data: any) => {
          console.log(data,"address data")
        setZipCode(data.zonecode)
        setAddress(data.address)
        setIsOpen(false);
      }

      
      const moveToHome = () => {
        router.push("/");
    };


    

    return (
        <SignUpPresenter
            onClickSignUp={onClickSignUp}
            register={register}
            handleSubmit={handleSubmit}
            formState={formState}
            moveToHome={moveToHome}
            onChangePassword={onChangePassword}
            onChangePasswordCheck={onChangePasswordCheck}
            isWrite={isWrite}
            isWrite2={isWrite2}
            isWriteEmail={isWriteEmail}
            isWritePhone={isWritePhone}
            isWriteToken={isWriteToken}

            passwordType={passwordType}
            passwordCheckType={passwordCheckType}
            togglePassword={togglePassword}
            togglePasswordCheck={togglePasswordCheck}

            onChangeEmail={onChangeEmail}
            onClickCheckEmail={onClickCheckEmail}
            onChangePhone={onChangePhone}
            onClickSendToken={onClickSendToken}

            onChangeAddressDetail={onChangeAddressDetail}
            handleOk={handleOk}
            handleCancel={handleCancel}
            handleComplete={handleComplete}
            showModal={showModal}

            isOpen={isOpen}
            zipCode={zipCode}
            address={address}
            addressDetail={addressDetail}

            onChangeToken={onChangeToken}
            onClickCheckToken={onClickCheckToken}

            isDisabled={isDisabled}
            time={time}
        />
    );
}
