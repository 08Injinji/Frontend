import styled from 'styled-components';
import { QnaListItem, EmailListItem } from '../../components/listItem';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const QNA_MOCK_DATA = [
  { title: '주문한 상품 언제 오나요? 목뼈 빠지겠어요.', date: '2월 15일' },
  { title: '색상 변경 원합니다. 발송 전이니까 가능하겠져?', date: '2월 14일' },
];

const EMAIL_MOCK_DATA = [
  { sender: '박정우', title: '안녕하세요. 계약 문의 드립니다.' },
  { sender: '홍정기', title: '지금 사용하고 계시는 인터넷이 느리신가요?' },
  { sender: '김상우', title: '$$넷플릭스! 아직도 그 돈 내고 이용하신다고요?!' },
  { sender: '스마트스토어', title: '22년 2월 세금계산서 발행입니다.' },
];

const AdminMainComponent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
  font-family: 'Noto Sans KR', serif;
`;

const AdminMainOrderPreviewSection = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #d0d0d0;
`;

const AdminMainVerticalSection = styled.div`
  width: 100%;
  height: 300px;
  padding: 20px 0px;
  border-bottom: 1px solid #d0d0d0;
`;

const AdminMainHorizontalSection = styled.div`
  flex: 1;
  width: 50%;
  height: 100%;
  padding: 10px;
`;

const NumberAndWord = ({ number, word }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60px',
        height: '60px',
      }}
    >
      <div style={{ fontSize: '30px' }}>{number}</div>
      <div style={{ fontSize: '14px' }}>{word}</div>
    </div>
  );
};

const labels = ['1', '2', '3'];

const AdminMain = () => {
  return (
    <AdminMainComponent>
      <AdminMainOrderPreviewSection>
        <div
          style={{
            display: 'flex',
            width: '400px',
            justifyContent: 'space-between',
          }}
        >
          <NumberAndWord number={13} word="신규주문" />
          <NumberAndWord number={38} word="발주확인" />
          <NumberAndWord number={130} word="배송중" />
          <NumberAndWord number={270} word="배송완료" />
        </div>
        <div
          style={{
            display: 'flex',
            width: '300px',
            justifyContent: 'space-between',
          }}
        >
          <NumberAndWord number={0} word="취소" />
          <NumberAndWord number={0} word="교환" />
          <NumberAndWord number={0} word="반품" />
        </div>
      </AdminMainOrderPreviewSection>
      <AdminMainVerticalSection style={{ display: 'flex' }}>
        <AdminMainHorizontalSection>
          <div style={{ marginBottom: '20px' }}>미답변 문의</div>
          <div style={{ width: '100%' }}>
            {QNA_MOCK_DATA.map((item, index) => (
              <QnaListItem key={index} title={item.title} date={item.date} />
            ))}
          </div>
        </AdminMainHorizontalSection>
        <AdminMainHorizontalSection>
          <div style={{ marginBottom: '20px' }}>E-mail</div>
          <div style={{ width: '100%' }}>
            {EMAIL_MOCK_DATA.map((item, index) => (
              <EmailListItem
                key={index}
                sender={item.sender}
                title={item.title}
              />
            ))}
          </div>
        </AdminMainHorizontalSection>
      </AdminMainVerticalSection>
      <AdminMainVerticalSection
        style={{ padding: '30px 10px', borderBottom: 'none' }}
      >
        <div>매출 통계</div>
        <Line
          width={100}
          height={30}
          options={{ responsive: true }}
          data={{
            labels,
            datasets: [
              {
                label: 'Dataset 1',
                data: [100, 500, 300],
                borderColor: '#41B97F',
                backgroundColor: '#53DA99',
              },
            ],
          }}
        />
      </AdminMainVerticalSection>
    </AdminMainComponent>
  );
};

export default AdminMain;
