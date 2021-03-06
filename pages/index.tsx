import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Contents from '../components/Contents';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout>
        <Header />
        <Navbar />
        <Contents />
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
