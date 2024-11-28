'use client'
import {
  Container,
  Avatar,
  Table,
  Group,
  Text,
  ActionIcon,
  Menu,
  rem,
} from '@mantine/core'
import { Navbar } from '../components/Navbar'
import React, { useEffect, useState } from 'react'
import { getMarketUsers } from '../actions/getUsers'

export default function Marketplace() {
  const [marketUsers, setMarketUsers] = useState<any>([])

  useEffect(() => {
    const fetcher = async () => {
      const res = await getMarketUsers()
      setMarketUsers(res)
    }
    fetcher()
  }, [])
  marketUsers.map((item: any) => {
    console.log(typeof item.email_verified)
  })

  const rows = marketUsers.map((item: any) => (
    <Table.Tr key={item.uuid}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={40} src={item.avatar} radius={40} />
          <div>
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
            <Text c="dimmed" fz="xs">
              {item.job}
            </Text>
          </div>
        </Group>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{item.email}</Text>
        <Group>
          <Text fz="xs" c="dimmed">
            Email verified :
          </Text>
          <Text fz="xs" c={item.email_verified === 'true' ? 'green' : 'red'}>
            {item.email_verified}
          </Text>
        </Group>

        {/* <Text fz="xs" c="dimmed">
          Email
        </Text> */}
      </Table.Td>
      <Table.Td>
        <Text fz="sm">$20/ hr</Text>
        <Text fz="xs" c="dimmed">
          Rate
        </Text>
      </Table.Td>
      <Table.Td>
        <Group gap={0} justify="flex-end">
          <ActionIcon variant="subtle" color="gray">
            {/* <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} /> */}
          </ActionIcon>
          <Menu
            transitionProps={{ transition: 'pop' }}
            withArrow
            position="bottom-end"
            withinPortal
          >
            <Menu.Target>
              <ActionIcon variant="subtle" color="gray">
                {/* <IconDots style={{ width: rem(16), height: rem(16) }} stroke={1.5} /> */}
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
              // leftSection={
              //   <IconMessages style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              // }
              >
                Send message
              </Menu.Item>
              <Menu.Item
              // leftSection={<IconNote style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
              >
                Add note
              </Menu.Item>
              <Menu.Item
              // leftSection={
              //   <IconReportAnalytics style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              // }
              >
                Analytics
              </Menu.Item>
              <Menu.Item
                // leftSection={<IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                color="red"
              >
                Terminate contract
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Table.Td>
    </Table.Tr>
  ))

  return (
    <>
      <Navbar />
      <Container fluid mx="md">
        {marketUsers.length ? (
          <Table.ScrollContainer minWidth={800}>
            <Table verticalSpacing="md">
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        ) : null}
      </Container>
    </>
  )
}
