import { Form, Input, Select } from 'antd'
import { useEffect } from 'react'
import {
  getLocationStatusLabel,
  type LocationDetails,
  type LocationStatus,
} from '../../types/location'
import { FormModal } from './styles'

export interface LocationStatusFormValues {
  status: LocationStatus
  note?: string
}

interface LocationStatusModalProps {
  location?: LocationDetails
  open: boolean
  confirmLoading?: boolean
  statusOptions: LocationStatus[]
  onCancel: () => void
  onSubmit: (values: LocationStatusFormValues) => void
}

export function LocationStatusModal({
  location,
  open,
  confirmLoading,
  statusOptions,
  onCancel,
  onSubmit,
}: LocationStatusModalProps) {
  const [form] = Form.useForm()

  useEffect(() => {
    if (open) {
      form.resetFields()
      form.setFieldsValue({
        status: location?.status,
        note: '',
      })
    }
  }, [form, location, open])

  function handleSubmit() {
    form
      .validateFields()
      .then((values: LocationStatusFormValues) => {
        onSubmit(values)
      })
      .catch(() => undefined)
  }

  return (
    <FormModal
      centered
      destroyOnHidden
      open={open}
      title="Alterar status do local"
      okText="Salvar"
      cancelText="Cancelar"
      confirmLoading={confirmLoading}
      width={520}
      styles={{
        mask: { backdropFilter: 'blur(2px)', background: 'rgb(0 0 0 / 45%)' },
      }}
      onCancel={onCancel}
      onOk={handleSubmit}
    >
      <Form form={form} layout="vertical" requiredMark={false}>
        <Form.Item
          label="Status"
          name="status"
          rules={[{ required: true, message: 'Selecione o status.' }]}
        >
          <Select
            placeholder="Selecione o status..."
            options={statusOptions.map((status) => ({
              label: getLocationStatusLabel(status),
              value: status,
            }))}
          />
        </Form.Item>

        <Form.Item label="Observação" name="note">
          <Input.TextArea placeholder="Informe uma observação opcional..." />
        </Form.Item>
      </Form>
    </FormModal>
  )
}