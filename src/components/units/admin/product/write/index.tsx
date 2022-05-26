import { gql, useMutation, useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from "uuid";
import UploadFileAdminPage from "../../../../commons/uploadfile-admin";
import { useRouter } from 'next/router';
import { Modal } from 'antd';

const ProductWriteWrapper = styled.div`
width: 100%;
padding: 100px 340px;
color: #f1f1f1;
`
const Title = styled.div`
    color: #f1f1f1;
    font-size: 26px;
    padding-bottom: 20px;
`

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
`

const Inputs = styled.input`
    border-radius: 10px;
    width: 800px;
    height: 50px;
    line-height: 50px;
    margin-bottom: 20px;
    padding-left: 20px;
    margin-left: 20px;
    background-color: #1b1b1b;
    ::placeholder{
        color: #666;
    }
    
`
const SmallTitle = styled.div`
    color: #f1f1f1;
    font-size: 20px;
    padding-bottom: 20px;
`
const TagDivWrapper = styled.div`
width: 100%;
padding-left: 20px;
margin-bottom: 30px;
display: flex;
`

const TagWrapper = styled.div` 
width: 100px;
margin-right: 10px;
color: #f1f1f1;
border-radius: 10px;
border: 1px solid #B150F2;
text-align: center;
font-size: 15px;
height: 50px;
line-height: 50px;
cursor: pointer;
`

const TagInputWrapper = styled.div`
  padding-bottom: 20px;
`;

const Tag = styled.div`
    letter-spacing: 2px;
`

const SmallInput = styled.input`
    width: 200px;
    height: 50px;
    border-radius: 10px;
    line-height: 30px;
    padding: 10px;
    margin-bottom: 20px;
    background-color: #1b1b1b;
    color: #f1f1f1;
`


const ImageWrapper = styled.div`
    display: flex;
    padding-left: 20px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
`

const SubmitButton = styled.button`
    width: 250px;
    height: 80px;
    padding: 10px;
    margin: 80px 20px;
    text-align: center;
    font-size: 20px;
    :hover{
        border: 1px solid #B150F2;
        color: #B150F2;
    }

`

const CREATE_PRODUCT = gql`
    mutation createProduct($createProductInput: CreateProductInput!) {
        createProduct(createProductInput: $createProductInput) {
            id
            title
            description
            price
            like
            createdAt
            thumbnail
            productTags{
                id
                tag
            }
        }
    }
`;

const UPDATE_PRODUCT = gql`
    mutation updateProduct($productId: String! $updateProductInput: UpdateProductInput!){
        updateProduct(productId: $productId updateProductInput:$updateProductInput){
            id
            title
            description
            price
            like
            createdAt
            thumbnail
            productTags{
                id
                tag
            }
        }
    }
`


export default function AdminProductWrite(props:any) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [hashArr, setHashArr] = useState<string[]>([]);
    const [imageUrls, setImageUrls] = useState(["","",""])

    const [createProduct] = useMutation(CREATE_PRODUCT);
    const [updateProduct] = useMutation(UPDATE_PRODUCT);

    const router = useRouter()


    const onChangeTitle = (event:any) => {
        setTitle(event.target.value)
    }

    const onChangeDescription = (event:any) => {
        setDescription(event.target.value)
    }

    const onChangePrice = (event:any) => {
        setPrice(event.target.value)
        console.log(price,"price")
    }

    const onChangeFileUrl = (fileUrl:any, index:number) => {
        const newFile = [...imageUrls]
        newFile[index] = fileUrl;
        setImageUrls(newFile)
    }

    const onKeyUpHash = (event: any) => {
        if (event.keyCode === 32 && event.target.value !== "") {
          setHashArr([...hashArr, "#" + event.target.value]);
          event.target.value = "";
        }
      };


    const onClickTagDelete = (event: any) => {
        hashArr.splice(Number(event.target.id), 1);
        setHashArr([...hashArr]);
      };

      useEffect(() => {
        if (props.data?.fetchProduct?.productTags?.tag.length) {
          setHashArr([...props.data?.fetchProduct?.productTags?.tag]);
        }
      }, [props.data]);

      useEffect(()=>{
        if(props.data?.fetchProduct.thumbnail?.length){
            setImageUrls([...props.data?.fetchProduct.thumbnail])
        }
      },[props.data?.fetchProduct.thumbnail])
  


    const onClickSubmit = async () => {
        try {
            const result = await createProduct({
                variables: {
                    createProductInput: {
                        title,
                        description,
                        price:Number(price),
                        imageUrls,
                        productTags: hashArr,
                    },
                },
            });
            console.log(result);
            alert("성공");
        } catch (error) {
            alert("실패");
        }
    };

    
    const onClickUpdateProduct = async() => {
        try{
            await updateProduct({
                variables:{
                    productId:router.query.id,
                    updateProductInput:{
                        title,
                        description,
                        price:Number(price),
                        imageUrls,
                        productTags:hashArr
                    }
                }
            })
            Modal.success({content:"업데이트 완료"})
            router.push("/admin/product")

        }catch(error:any){
            Modal.error({content:error.message})
        }
     
    }

    return (
        <ProductWriteWrapper>
            <Title>{props.isEdit ?"Edit" : "Create"} Product</Title>
            <InputWrapper>
               Title <Inputs placeholder="title" onChange={onChangeTitle} type="text" defaultValue={props.data?.fetchProduct.title}/>
               Description <Inputs placeholder="description" onChange={onChangeDescription} type="text" defaultValue={props.data?.fetchProduct.description}/>
               Price <Inputs placeholder="price" onChange={onChangePrice} type="number" defaultValue={props.data?.fetchProduct.price}/>
            </InputWrapper>
                <InputWrapper>
                    <SmallTitle>ProductTags</SmallTitle>
                        <TagInputWrapper>
                        # {"  "}
                        <SmallInput
                            type="text"
                            onKeyUp={onKeyUpHash}
                            placeholder="spacebar"
                        />
                        </TagInputWrapper>
                        <TagDivWrapper>
                        {hashArr.map((el: any, idx: any) => (
                            <TagWrapper key={idx}>
                            <Tag onClick={onClickTagDelete} id={idx}>{el}</Tag>
                            </TagWrapper>
                        ))}
                        </TagDivWrapper>
                </InputWrapper>
                
            <ImageWrapper>
                {imageUrls?.map((el:any, index:any)=>(
                    <div key={uuidv4()}>
                        <UploadFileAdminPage onChangeFileUrl={onChangeFileUrl} fileUrl={el} index={index}/>
                    </div>
                ))}
            </ImageWrapper>

            <SubmitButton onClick={props.isEdit ? onClickUpdateProduct : onClickSubmit}>{props.isEdit ? "Edit" : "Submit"}</SubmitButton>
        </ProductWriteWrapper>
    );
}