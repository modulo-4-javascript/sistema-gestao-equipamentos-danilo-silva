import { Alert, Empty, Spin } from 'antd'
import {
  formatLocationDate,
  getLocationStatusLabel,
  getLocationTypeLabel,
  type LocationDetails,
  type LocationEquipment,
  type LocationHistoryItem,
} from '../../types/location'
import {
  DetailGrid,
  DetailItem,
  DetailLabel,
  DetailValue,
  EquipmentItem,
  HistoryItem,
  HistoryList,
  ModalTitle,
  Section,
  SectionTitle,
  StatusPill,
  StyledModal,
} from './styles'

interface LocationDetailsModalProps {
  location?: LocationDetails
  equipments: LocationEquipment[]
  history: LocationHistoryItem[]
  open: boolean
  loading?: boolean
  errorMessage?: string
  onCancel: () => void
  onEdit: (location: LocationDetails) => void
  onChangeStatus: (location: LocationDetails) => void
  onRemove: (location: LocationDetails) => void
}

export function LocationDetailsModal({
  location,
  equipments,
  history,
  open,
  loading,
  errorMessage,
  onCancel,
  onEdit,
  onChangeStatus,
  onRemove,
}: LocationDetailsModalProps) {
  return (
    <StyledModal
      centered
      open={open}
      width={900}
      title="Detalhes do local"
      cancelText="Fechar"
      okText="Editar"
      okButtonProps={{ disabled: !location }}
      onCancel={onCancel}
      onOk={() => location && onEdit(location)}
      footer={(_, { OkBtn, CancelBtn }) => (
        <>
          <CancelBtn />
          <OkBtn />
          <button
            type="button"
            className="ant-btn"
            disabled={!location}
            onClick={() => location && onChangeStatus(location)}
          >
            Alterar status
          </button>
          <button
            type="button"
            className="ant-btn ant-btn-primary ant-btn-dangerous"
            disabled={!location}
            onClick={() => location && onRemove(location)}
          >
            Excluir
          </button>
        </>
      )}
    >
      {loading && <Spin />}

      {errorMessage && (
        <Alert
          showIcon
          message="Erro ao carregar detalhes"
          description={errorMessage}
          type="error"
        />
      )}

      {!loading && !errorMessage && !location && (
        <Empty description="Localização não encontrada." />
      )}

      {location && (
        <>
          <ModalTitle>
            <span>
              {location.name}
              <small>{location.code}</small>
            </span>

            <StatusPill $status={location.status}>
              {getLocationStatusLabel(location.status)}
            </StatusPill>
          </ModalTitle>

          <Section>
            <SectionTitle>Informações gerais</SectionTitle>

            <DetailGrid>
              <DetailItem>
                <DetailLabel>Tipo</DetailLabel>
                <DetailValue>{getLocationTypeLabel(location.type)}</DetailValue>
              </DetailItem>

              <DetailItem>
                <DetailLabel>Prédio</DetailLabel>
                <DetailValue>{location.building || 'Não informado'}</DetailValue>
              </DetailItem>

              <DetailItem>
                <DetailLabel>Andar</DetailLabel>
                <DetailValue>{location.floor || 'Não informado'}</DetailValue>
              </DetailItem>

              <DetailItem>
                <DetailLabel>Sala</DetailLabel>
                <DetailValue>{location.room || 'Não informado'}</DetailValue>
              </DetailItem>

              <DetailItem>
                <DetailLabel>Equipamentos</DetailLabel>
                <DetailValue>{location.equipmentCount}</DetailValue>
              </DetailItem>

              <DetailItem>
                <DetailLabel>Criado em</DetailLabel>
                <DetailValue>{formatLocationDate(location.createdAt)}</DetailValue>
              </DetailItem>

              <DetailItem>
                <DetailLabel>Atualizado em</DetailLabel>
                <DetailValue>{formatLocationDate(location.updatedAt)}</DetailValue>
              </DetailItem>
            </DetailGrid>
          </Section>

          <Section>
            <SectionTitle>Descrição</SectionTitle>
            <DetailValue>{location.description || 'Sem descrição cadastrada.'}</DetailValue>
          </Section>

          <Section>
            <SectionTitle>Equipamentos vinculados</SectionTitle>

            {equipments.length === 0 ? (
              <Empty description="Nenhum equipamento vinculado a este local." />
            ) : (
              equipments.map((equipment) => (
                <EquipmentItem key={equipment.id}>
                  <strong>{equipment.name}</strong>
                  <span>{equipment.model}</span>
                </EquipmentItem>
              ))
            )}
          </Section>

          <Section>
            <SectionTitle>Histórico de movimentações</SectionTitle>

            {history.length === 0 ? (
              <Empty description="Nenhum histórico encontrado para este local." />
            ) : (
              <HistoryList>
                {history.map((item) => (
                  <HistoryItem key={item.id}>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                    <small>{formatLocationDate(item.createdAt)}</small>
                  </HistoryItem>
                ))}
              </HistoryList>
            )}
          </Section>
        </>
      )}
    </StyledModal>
  )
}