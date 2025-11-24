import { ipcMain } from 'electron'
import {
  createBusinessDetails,
  getBusinessDetailsById,
  updateBusinessDetails
} from 'main/services/businessdetailsService'

ipcMain.handle('businessDetails:create', async (_event, data) => {
  return await createBusinessDetails(data)
})

ipcMain.handle('businessDetails:getById', async (_event, id: number) => {
  return await getBusinessDetailsById(id)
})
ipcMain.handle('businessDetails:update', async (_event, id: number, data) => {
  return await updateBusinessDetails(id, data)
})
