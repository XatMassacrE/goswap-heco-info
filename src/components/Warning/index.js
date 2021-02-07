import React from 'react'
import 'feather-icons'
import styled from 'styled-components'
import { Text } from 'rebass'
import { AlertTriangle } from 'react-feather'
import { RowBetween, RowFixed } from '../Row'
import { ButtonDark } from '../ButtonStyled'
import { AutoColumn } from '../Column'
import { Hover } from '..'
import Link from '../Link'
import { useMedia } from 'react-use'

const WarningWrapper = styled.div`
  border-radius: 20px;
  border: 1px solid #f82d3a;
  background: rgba(248, 45, 58, 0.05);
  padding: 1rem;
  color: #f82d3a;
  display: ${({ show }) => !show && 'none'};
  margin: 0 2rem 2rem 2rem;
  position: relative;

  @media screen and (max-width: 800px) {
    width: 80% !important;
    margin-left: 5%;
  }
`

const StyledWarningIcon = styled(AlertTriangle)`
  min-height: 20px;
  min-width: 20px;
  stroke: red;
`

export default function Warning({ type, show, setShow, address }) {
  const below800 = useMedia('(max-width: 800px)')

  const textContent = below800 ? (
    <div>
      <Text fontWeight={500} lineHeight={'145.23%'} mt={'10px'}>
      任何人都可以在HECO上创建和命名任何Token，包括创建现有Token的伪造版本和声称代表没有Token的项目的Token。
      </Text>
      <Text fontWeight={500} lineHeight={'145.23%'} mt={'10px'}>
      与HecoScan类似，此站点自动跟踪所有Token的分析，而与Token的诚信无关,与任何Token互动之前，请先进行自己的研究。
      </Text>
    </div>
  ) : (
    <Text fontWeight={500} lineHeight={'145.23%'} mt={'10px'}>
      任何人都可以在HECO上创建和命名任何Token，包括创建现有Token的伪造版本和声称代表没有Token的项目的Token。与BscScan类似，与HecoScan类似，此站点自动跟踪所有Token的分析，而与Token的诚信无关,与任何Token互动之前，请先进行自己的研究。
    </Text>
  )

  return (
    <WarningWrapper show={show}>
      <AutoColumn gap="4px">
        <RowFixed>
          <StyledWarningIcon />
          <Text fontWeight={600} lineHeight={'145.23%'} ml={'10px'}>
            Token Safety Alert
          </Text>
        </RowFixed>
        {textContent}
        {below800 ? (
          <div>
            <Hover style={{ marginTop: '10px' }}>
              <Link
                fontWeight={500}
                lineHeight={'145.23%'}
                color={'#2172E5'}
                href={'https://scan.hecochain.com//address/' + address}
                target="_blank"
              >
                View {type === 'token' ? 'token' : 'pair'} contract on HecoScan
              </Link>
            </Hover>
            <RowBetween style={{ marginTop: '20px' }}>
              <div />
              <ButtonDark color={'#f82d3a'} style={{ minWidth: '140px' }} onClick={() => setShow(false)}>
                I understand
              </ButtonDark>
            </RowBetween>
          </div>
        ) : (
          <RowBetween style={{ marginTop: '10px' }}>
            <Hover>
              <Link
                fontWeight={500}
                lineHeight={'145.23%'}
                color={'#2172E5'}
                href={'https://scan.hecochain.com//address/' + address}
                target="_blank"
              >
                View {type === 'token' ? 'token' : 'pair'} contract on HecoScan
              </Link>
            </Hover>
            <ButtonDark color={'#f82d3a'} style={{ minWidth: '140px' }} onClick={() => setShow(false)}>
              I understand
            </ButtonDark>
          </RowBetween>
        )}
      </AutoColumn>
    </WarningWrapper>
  )
}
