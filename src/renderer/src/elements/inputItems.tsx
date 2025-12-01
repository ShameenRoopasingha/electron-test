import Btn from '@renderer/components/Btn'
import { FC } from 'react'
import add from '@renderer/assets/icons/add-list (2).png'
import ItemsTable from './tables/ItemTable/ItemsTable'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const InputItems: FC = () => {
  return (
    <div className="flex-col flex  w-full ">
      <div className="justify-end align-middle content-end flex w-full my-10">
        <Dialog>
          <form action="">
            <DialogTrigger asChild>
              <Btn icon={add} color={'success'} classNames=" text-black flex-row-reverse left-160">
                Add New Item
              </Btn>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Item</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="name-1">Item Name</Label>
                  <Input id="name-1" name="name" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="username-1">Category</Label>
                  <Input id="username-1" name="username" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Add Item</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
      <div>
        <ItemsTable />
      </div>
    </div>
  )
}
