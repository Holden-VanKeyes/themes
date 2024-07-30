'use client'
import React from 'react'
import { Button, Checkbox, Group, TextInput, Container } from '@mantine/core'
import insertToDB from '../actions/dbUpdates'
import { addTimeStamps } from '../actions/dbUpdates'
import Link from 'next/link'

export default function TestComponent() {
  return (
    <>
      <div>TestComponent</div>
      <Group>
        <Button onClick={() => insertToDB()}>Run DB Insert</Button>
        <Button onClick={() => addTimeStamps()}>Add Time</Button>
        <Button href="/marketplace" component={Link}>
          Navigate
        </Button>
      </Group>
    </>
  )
}
