import { Modal } from 'antd'
import styled from 'styled-components'
import type { LocationStatus } from '../../types/location'

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    overflow: hidden;
    padding: 0;
    border-radius: 8px;
  }

  .ant-modal-header {
    margin: 0;
    padding: 20px 24px;
    border-bottom: 1px solid #d9d9d9;
  }

  .ant-modal-body {
    max-height: 70vh;
    padding: 24px;
    overflow-y: auto;
  }

  .ant-modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin: 0;
    padding: 16px 24px;
    border-top: 1px solid #d9d9d9;
  }
`

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;

  span {
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: #111827;
    font-size: 24px;
    font-weight: 700;
  }

  small {
    color: #6b7280;
    font-size: 13px;
    font-weight: 500;
  }
`

export const StatusPill = styled.span<{ $status: LocationStatus }>`
  display: inline-flex !important;
  align-items: center;
  width: fit-content;
  padding: 4px 10px;
  border: 1px solid
    ${({ $status }) => ($status === 'ACTIVE' ? '#87e8de' : '#d9d9d9')};
  border-radius: 999px;
  background: ${({ $status }) =>
    $status === 'ACTIVE' ? '#e6fffb' : '#f3f4f6'};
  color: ${({ $status }) => ($status === 'ACTIVE' ? '#007c8c' : '#6b7280')};
  font-size: 12px !important;
  font-weight: 700 !important;
`

export const Section = styled.section`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
`

export const SectionTitle = styled.h3`
  margin: 0 0 16px;
  color: #111827;
  font-size: 16px;
  font-weight: 700;
`

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const DetailLabel = styled.span`
  color: #6b7280;
  font-size: 12px;
  font-weight: 600;
`

export const DetailValue = styled.span`
  color: #111827;
  font-size: 14px;
  line-height: 22px;
`

export const EquipmentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 0;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: 0;
  }

  strong {
    color: #111827;
    font-size: 14px;
  }

  span {
    color: #6b7280;
    font-size: 13px;
  }
`

export const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const HistoryItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-left: 12px;
  border-left: 3px solid #007c8c;

  strong {
    color: #111827;
    font-size: 14px;
  }

  span {
    color: #4b5563;
    font-size: 13px;
  }

  small {
    color: #6b7280;
    font-size: 12px;
  }
`