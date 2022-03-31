import { Resume } from '@daidarabotchi/portfolio-lib';
import {
  ResumeHead,
  ResumeFoot,
  ResumeContent,
} from '@daidarabotchi/portfolio-lib/interfaces';
import React, { useEffect, useState } from 'react';

export const getStaticProps = async () => {
  try {
    const head = await (
      await fetch('http://localhost:4200/resume/head.json')
    ).json();
    const foot = await (
      await fetch('http://localhost:4200/resume/foot.json')
    ).json();
    const content = await (
      await fetch('http://localhost:4200/resume/resumeParts.json')
    ).json();
    return {
      props: {
        ok: true,
        head,
        content,
        foot,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      props: {
        ok: false,
      },
    };
  }
};

const Index = ({
  ok,
  head,
  content,
  foot,
}: {
  ok: boolean;
  head?: ResumeHead;
  foot?: ResumeFoot;
  content?: { [key: string]: string }[];
}) => {
  const [fetchedContent, setContent] = useState<ResumeContent[]>([]);

  useEffect(() => {
    if (ok && content) {
      content.forEach(block => {
        const fetchData = async (title: string, pointer: string) => {
          try {
            const contentData = await (await fetch(pointer)).json();
            setContent([...content, contentData])
          } catch (error) {
            setContent([...content, {error}])
          }
        };
        fetchData(Object.keys(block)[0], Object.values(block)[0]);
      });
    }
  }, [ok]);

  if (ok) {
    return <Resume head={head} foot={foot} content={fetchedContent} />;
  } else {
    return <h1>500</h1>;
  }
};

export default Index;
