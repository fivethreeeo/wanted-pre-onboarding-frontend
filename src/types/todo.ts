export type TodoType = {
  id: number
  todo: string
  isCompleted: boolean
  userId: number
}

export type TodoButtonTitleType = '수정' | '삭제' | '제출' | '취소'
