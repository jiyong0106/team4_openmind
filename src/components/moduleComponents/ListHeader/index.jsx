import { useState } from 'react'
import StyledListHeader from './StyledListHeader'
import logo from '../../../assets/images/headerLogo.svg'
import { ReplyButton } from '../../atomicComponents/buttonComponent/ReplyButton'
import { Link } from 'react-router-dom'

const ListHeader = () => {
  const [localId, setLocalId] = useState('')
  const handleClick = () => {
    setLocalId(localStorage.getItem()) // 로컬스토리지에서 id를  가져오기 // onClick, Link 의 실행순서가 궁금
  }
  return (
    <StyledListHeader>
      <Link to='/'>
        <img className='logo-img' src={logo} alt='로고' />
      </Link>
      <Link to={`${localId}` ? `/post/${localId}/answer` : '/'}>
        <ReplyButton onClick={handleClick}>답변하러 가기</ReplyButton>
      </Link>
    </StyledListHeader>
  )
}

export default ListHeader