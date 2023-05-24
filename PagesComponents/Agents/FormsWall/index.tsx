import { deviceMin } from 'Consts/device';
import styled from 'styled-components';
import {
  Layer1_SubtitleStyle,
  Layer1_TitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { useListData } from './useListData';
import NoData from 'Components/NoData';
import { ContentOrError } from 'Components/contentOrError';
import { SmartButton } from './SmartButton';
import { useEffect, useState } from 'react';
import CardsSection from './CardsSection';
import { useOldestBasicForm } from './useOldestBasicForm';

function Content() {
  const { t } = useStaticTranslation(componentStatements);
  const [oldestBasicFormId, setOldestBasicFormId] = useState<
    string | undefined
  >();
  const { lastBasicForm } = useOldestBasicForm({ resParams: `_id` });
  useEffect(() => {
    if (lastBasicForm?._id) setOldestBasicFormId(lastBasicForm?._id);
  }, [lastBasicForm]);
  //این هوکیه که لیست بسیک فرم ها رو برمیگردونه
  const {
    forms,
    isFetching,
    isRefetching,
    fetchNextPage,
    isError,
    isLoading,
    hasNextPage,
  } = useListData(oldestBasicFormId);
  return (
    <Container>
      <PageTitle>{t(LanguageKeys.PageTitle)}</PageTitle>
      <PageSubtitle>{t(LanguageKeys.PageSubtitle)}</PageSubtitle>
      <CardContainer>
        {!forms?.pages?.[0]?.length &&
        !isFetching &&
        !isLoading &&
        oldestBasicFormId ? (
          <NoData hasIcon={false} themeLayer='1' />
        ) : (
          <>
            <ContentOrError
              isError={isError}
              content={<CardsSection forms={forms} />}
            />
            <SmartButton
              isError={isError}
              isFetching={isFetching || isRefetching}
              hasNextPage={hasNextPage || false}
              fetchNextPage={fetchNextPage}
            />
          </>
        )}
      </CardContainer>
    </Container>
  );
}
export default Content;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PageTitle = styled.h1`
  ${Layer1_TitleStyle}
  @media ${deviceMin.tabletS} {
    width: 100%;
    text-align: start;
  }
`;
const PageSubtitle = styled.h2`
  ${Layer1_SubtitleStyle};
  margin-bottom: 4rem;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;
