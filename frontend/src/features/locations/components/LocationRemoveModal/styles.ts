import { Modal } from 'antd'
import styled from 'styled-components'

export const RemoveModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
    overflow: hidden;
    border-radius: 8px;
    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 10%),
      0 4px 6px -4px rgb(0 0 0 / 10%);
  }

  .ant-modal-header {
    margin: 0;
    padding: 20px 24px;
    border-bottom: 1px solid #d9d9d9;
  }

  .ant-modal-title {
    color: #141b2b;
    font-size: 20px;
    font-weight: 700;
  }

  .ant-modal-body {
    padding: 24px;
  }

  .ant-modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin: 0;
    padding: 16px 24px;
    border-top: 1px solid #d9d9d9;
  }

  .ant-modal-footer .ant-btn {
    min-width: 100px;
    height: 40px;
    border-radius: 6px;
    font-weight: 600;
  }

  .ant-modal-footer .ant-btn-dangerous {
    background: #ff4d4f;
    border-color: #ff4d4f;
  }

  .ant-modal-footer .ant-btn-dangerous:hover {
    background: #ff7875 !important;
    border-color: #ff7875 !important;
  }
`

export const Message = styled.p`
  margin: 0;
  color: #141b2b;
  font-size: 16px;
  line-height: 24px;
`

export const Hint = styled.p`
  margin: 12px 0 0;
  color: #6b7280;
  font-size: 14px;
  line-height: 20px;
`