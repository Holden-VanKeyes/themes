'use server'
import db from '../../../db'

export async function submitFeedback(feedbackData: {
  puzzle_date: string
  difficulty: number
  question_response: string
  feedback?: string
  skips_used: number
  hard_mode: boolean
  score_keeper: string
}) {
  try {
    await db('feedback').insert(feedbackData)
    return { success: true }
  } catch (error) {
    console.error('Failed to submit feedback:', error)
    return { success: false, error: 'Failed to submit feedback' }
  }
}
