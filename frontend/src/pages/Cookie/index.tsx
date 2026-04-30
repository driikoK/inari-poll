import { FC, FunctionComponent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Skeleton from '@mui/material/Skeleton';

import { Container, ElementContainer, ElementImage, ElementContent, ElementTitle } from './styles';
import { CreateAnimeAndMemberDialog, InputCookieDialog } from '@/pages/Cookie/components';
import { SUBJECTS } from '@/context/casl';
import { usePermissions } from '@/hooks';
import s from './Cookie.module.scss';

const IMAGES = {
  cookie: '/cookie.png',
  foxes: '/foxes.png',
  general: '/general.png',
  roles: '/roles.png',
};

const Cookie: FunctionComponent = () => {
  const [openCookieDialog, setOpenCookieDialog] = useState(false);
  const [openAddUsersAndTitlesDialog, setOpenAddUsersAndTitlesDialog] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({
    cookie: false,
    foxes: false,
    general: false,
    roles: false,
  });

  const isAllImagesLoaded =
    imageLoaded.cookie && imageLoaded.foxes && imageLoaded.general && imageLoaded.roles;

  const navigate = useNavigate();

  const { hasAccess } = usePermissions();

  const preloadImage = (imageKey: string, imageUrl: string) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setImageLoaded((prev) => ({ ...prev, [imageKey]: true }));
  };

  useEffect(() => {
    preloadImage('cookie', IMAGES.cookie);
    preloadImage('foxes', IMAGES.foxes);
    preloadImage('general', IMAGES.general);
    preloadImage('roles', IMAGES.roles);
  }, []);

  return (
    <div className={s.page}>
      <div className={s.header}>
        <div className={s.headerTitle}>Крихти</div>
        <div className={s.headerSubtitle}>Управляй та переглядай крихти учасників</div>
      </div>

      <Container>
        {hasAccess(SUBJECTS.ADD_COOKIES) && (
          <Card
            isLoaded={isAllImagesLoaded}
            onClick={() => setOpenCookieDialog(true)}
            imgUrl={IMAGES.cookie}
            title="Додати крихти"
            description="Записати нові крихти учасника"
          />
        )}

        {hasAccess(SUBJECTS.ADD_MEMBERS) && (
          <Card
            isLoaded={isAllImagesLoaded}
            onClick={() => setOpenAddUsersAndTitlesDialog(true)}
            imgUrl={IMAGES.foxes}
            title="Додати в лисятник"
            description="Новий учасник або тайтл"
          />
        )}

        <Card
          isLoaded={isAllImagesLoaded}
          onClick={() => navigate('list')}
          imgUrl={IMAGES.general}
          title="Список крихт"
          description="Переглянути всі записи"
        />

        <Card
          isLoaded={isAllImagesLoaded}
          onClick={() => navigate('rating')}
          imgUrl={IMAGES.roles}
          title="Рейтинг крихт"
          description="Хто заробив найбільше?"
        />
      </Container>

      {openCookieDialog && (
        <InputCookieDialog onClose={() => setOpenCookieDialog(false)} open={openCookieDialog} />
      )}
      {openAddUsersAndTitlesDialog && (
        <CreateAnimeAndMemberDialog
          onClose={() => setOpenAddUsersAndTitlesDialog(false)}
          open={openAddUsersAndTitlesDialog}
        />
      )}
    </div>
  );
};

export default Cookie;

type Props = {
  isLoaded: boolean;
  onClick: () => void;
  imgUrl: string;
  title: string;
  description: string;
};

const Card: FC<Props> = ({ isLoaded, onClick, imgUrl, title, description }) => {
  return (
    <ElementContainer onClick={onClick}>
      {!isLoaded ? (
        <Skeleton variant="rectangular" width={250} height={180} />
      ) : (
        <ElementImage $url={imgUrl} />
      )}
      <ElementContent>
        <ElementTitle>{title}</ElementTitle>
        <div className={s.cardDescription}>{description}</div>
        <div className={s.cardLink}>Відкрити →</div>
      </ElementContent>
    </ElementContainer>
  );
};
