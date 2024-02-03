--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: BookPost; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BookPost" (
    id text NOT NULL,
    title text NOT NULL,
    description text,
    filename text,
    category text,
    archive boolean DEFAULT true,
    linkdrive text,
    "uploaderId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    year integer
);


ALTER TABLE public."BookPost" OWNER TO postgres;

--
-- Name: DataPost; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."DataPost" (
    id text NOT NULL,
    title text NOT NULL,
    filename text NOT NULL,
    "uploaderId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    category text NOT NULL,
    description text NOT NULL,
    archive boolean DEFAULT true NOT NULL,
    linkdrive text,
    publish timestamp(3) without time zone,
    realfilename text,
    "dataAt" text
);


ALTER TABLE public."DataPost" OWNER TO postgres;

--
-- Name: SuperAdmin; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SuperAdmin" (
    id text NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    verification boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."SuperAdmin" OWNER TO postgres;

--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id text NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    role text NOT NULL,
    verification boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Data for Name: BookPost; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BookPost" (id, title, description, filename, category, archive, linkdrive, "uploaderId", "createdAt", "updatedAt", year) FROM stdin;
07825414-deeb-4c9f-bbb2-31f349f4eeed	Halo	\N	c165d2aa4ae846c974e36e2e6a9bb582-20240120-101416.pdf	\N	t	\N	19d16887-00cc-4b99-9d24-9a4b173004b2	2023-12-28 13:51:39.128	2024-01-20 03:20:21.703	2023
\.


--
-- Data for Name: DataPost; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."DataPost" (id, title, filename, "uploaderId", "createdAt", "updatedAt", category, description, archive, linkdrive, publish, realfilename, "dataAt") FROM stdin;
0731a8c9-bd7e-4873-96e1-ec9f63814b65	hello	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240120-072914.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-20 00:29:14.508	2024-01-20 00:29:14.508	hello	hello	f	\N	\N	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240120-072914.xlsx	1212-12-12
80b9cb8a-d1b2-426f-a3e9-3db11b2187e1	odwaoko	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240120-073133.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-20 00:31:33.241	2024-01-20 00:31:33.241	dkapwkwap	pkodpaowkapwdkp	f	\N	\N	8bf21eb693f5e53af0de9f28b7271c2b-20240120-073133.xlsx	1111-11-11
842a6fed-43ae-4cef-bd3d-e947bfa5cadd	okpkdpwak	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240120-073337.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-20 00:33:37.744	2024-01-20 00:33:37.744	dkapkwdoak	pkdpawkdpk	f	\N	\N	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240120-073337.xlsx	1111-11-11
9065254a-d1b0-4f7c-ae2f-4988d754a393	okpkdpwak1	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240120-073430.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-20 00:34:30.845	2024-01-20 00:34:30.845	dkapkwdoak	pkdpawkdpk	f	\N	\N	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240120-073430.xlsx	1111-11-11
599f346a-d40e-4504-81c2-f60ea8dc95a8	okpkdpwak1dowkapdkpa	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240120-073519.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-20 00:35:19.09	2024-01-20 00:35:19.09	dkapkwdoak1	pkdpawkdpk	f	\N	\N	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240120-073519.xlsx	1111-11-11
84b0c0d7-bb8e-4024-b659-d44bac430c1e	okpkdpwak1dowkapdkpa[[[	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240120-073901.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-20 00:39:01.739	2024-01-20 00:39:01.739	dkapkwdoak1	pkdpawkdpk	f	\N	\N	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240120-073901.xlsx	1111-11-11
fdf9e1fa-a242-452b-848d-bad7ba03d715	apjwdap	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240121-124901.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-21 05:49:01.908	2024-01-21 05:49:01.908	dwaodowjao	idjwajoidjoi	f	\N	\N	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240121-124901.xlsx	2003-12-12
c7c8a749-b6f8-4891-b586-d1d0dacc45af	okdpwakpdawk	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240121-134524.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-21 06:45:24.089	2024-01-21 06:45:24.089	dpokwapkpwd	dokpawkpwakpkd	f	\N	\N	\N	1222-12-12
e587fb96-dae3-4cb2-b8db-9d073ec8b641	Haiii	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240121-122224.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-21 05:22:24.974	2024-01-23 13:10:32.811	welcome	hai	t	\N	\N	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240121-122224.xlsx	1222-12-12
184ae416-8dc7-487f-8088-511f6a1f1024	dkwamdlmawlpl1	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240120-074242.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-20 00:42:42.298	2024-01-23 11:06:56.228	ldmlawmwdla	lmdawlkmdlka	t	\N	\N	cc4a9343975b6a65fd43cee36c9c57a5-20240120-074242.xlsx	1222-12-12
4ab5d3ac-7dad-4062-b995-6c471eaa60a2	dwaidjwaoi	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240121-150751.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-21 08:07:51.491	2024-01-23 11:21:46.525	dajwidjao	dwjaodjwa	t	\N	\N	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240121-150751.xlsx	18/01/2024
47e6f6ae-2de8-4575-bdfa-b3574be3a62c	versus	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240121-134723.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-21 06:47:23.93	2024-01-23 11:21:48.023	versus	versus	t	\N	\N	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240121-143232.xlsx	1999-09-09
9b78052b-8756-4076-877a-16685deacfe5	djawkdnawkdakj	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240121-134901.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-21 06:49:01.757	2024-01-23 11:21:50.931	dowakpowdkj	kdjawkj	t	\N	\N	\N	1999-01-09
e13f2fc9-eff5-47a8-91af-92396b59ece8	dwodaOI11	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240121-123958.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-21 05:39:58.769	2024-01-23 11:21:54.568	ODWJAOWDJAO	IDWJAODWOAJ	t	\N	\N	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240121-123958.xlsx	1212-12-12
5e8adf01-e777-4081-9325-1649895197af	dowaodj	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240121-134635.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-21 06:46:35.083	2024-01-23 13:10:41.048	odiwajodw	woidao	t	\N	\N	\N	1212-12-12
e67cfe4b-d096-44b5-8330-7ad5353ed104	ppppp	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240121-123406.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-21 05:34:06.727	2024-01-24 06:44:06.902	pppp	dwadwpaok	f	\N	2024-01-24 06:44:06.9	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240121-123406.xlsx	2000-12-12
54580cb1-15ee-4aea-b186-fc10f8df7e2c	dwodaOIDJW0	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240121-123921.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-21 05:39:21.186	2024-01-23 11:21:58.241	ODWJAOWDJAO	IDWJAODWOAJ	t	\N	\N	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240121-123921.xlsx	1212-12-12
c1acfcba-286a-4585-97da-e9204c341349	dwadawd	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240121-194313.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-21 12:43:13.352	2024-01-24 08:00:12.033	dwadwadwda	dwadwa	f	\N	2024-01-24 08:00:12.019	\N	11/01/2024
ed2987b9-f85a-49a2-9b5d-221f67d02aff	gave	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240124-150035.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-24 08:00:35.352	2024-01-24 08:01:00.758	gave	gave	t	\N	\N	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240124-150035.xlsx	03/01/2024
e2b2e991-dc71-448b-bc43-09e96502b559	viao1	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240124-134807.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-24 06:48:07.908	2024-01-24 07:59:45.988	viao	viao	t	\N	2024-01-24 07:50:46.733	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240124-134807.xlsx	23/01/2024
46323f14-565c-479d-ae79-763b54d6371a	dwodaOIDJW	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240121-123814.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-21 05:38:14.373	2024-01-24 08:00:00.615	ODWJAOWDJAO	IDWJAODWOAJ	f	\N	2024-01-24 08:00:00.6	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240121-123814.xlsx	1212-12-12
e07a964e-b33b-493f-ad65-9357d6b8d3b5	dhaiuwhdiu	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240123-231838.xlsx	19d16887-00cc-4b99-9d24-9a4b173004b2	2024-01-23 16:18:38.596	2024-01-24 08:00:04.923	uhawiuhdwia	diuhaiudhwiuah	f	\N	2024-01-24 08:00:04.909	2144cb2ec4ebbc8cd508d8cf02c04bd2-20240123-231838.xlsx	16/01/2024
\.


--
-- Data for Name: SuperAdmin; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SuperAdmin" (id, username, password, verification, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, username, password, role, verification, "createdAt", "updatedAt") FROM stdin;
19d16887-00cc-4b99-9d24-9a4b173004b2	rusli	$argon2id$v=19$m=65536,t=3,p=4$bhmqVO/w2E2Tb9lFruLMCQ$6UOa7TLOSo4TnrKqgeVYb3y4PjfDtSoEaHZnix8JRUg	admin	t	2023-12-11 15:21:14.729	2023-12-11 15:21:14.729
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
00064ec8-e233-4d34-8ea5-948c7c49ea5d	f6d6f4deb3ca9b97fc37aea542c42d21f78d6a2d1d000216243988d4d0033585	2023-12-29 23:35:12.860058+07	20231229163512_change_name_realse_to_publish	\N	\N	2023-12-29 23:35:12.844587+07	1
0808671e-53b9-46dc-9ff3-f9cd016452b2	45010cf4f2a0a7ab2bb1d6cb132686b9c82ef9b9df7df9775c6ab1513f82e951	2023-12-11 21:52:24.936763+07	20231211145224_remove_column_email	\N	\N	2023-12-11 21:52:24.866093+07	1
d95ef375-c32a-4902-825a-f9851e2112da	e5f76396a2defba721d8284049b7fb4cf13c041841b4cd76bf56cd75984e17c8	2023-12-11 21:53:48.652799+07	20231211145348_remove_column_email	\N	\N	2023-12-11 21:53:48.64207+07	1
a64fd38d-5411-41d9-8e79-0a5f68892266	20e33ccbd892732074b1b234356125d6245c86e26b1db17b759e228845bdca43	2023-12-11 21:57:09.026652+07	20231211145708_remove_column_email	\N	\N	2023-12-11 21:57:09.002673+07	1
8e505067-06e4-4214-ad61-67d77d999614	4b2ed4cf1d2fe9024af7ee991b83ac19c1111c277dd70ecdd8a9793d91ef7711	2023-12-29 23:36:45.820509+07	20231229163645_change_type_publish	\N	\N	2023-12-29 23:36:45.811673+07	1
1b6a54a0-cc43-482c-afb9-e5d6e0c5c23d	e5f76396a2defba721d8284049b7fb4cf13c041841b4cd76bf56cd75984e17c8	2023-12-11 21:57:54.419893+07	20231211145754_test	\N	\N	2023-12-11 21:57:54.409237+07	1
29be7dfe-e5dc-412c-92ef-92cea7a69ac8	c14484b23b5b824ba62a29c970f0ad49534e18f6366e3c839d156664562f0fad	2023-12-11 21:59:46.821556+07	20231211145946_test	\N	\N	2023-12-11 21:59:46.801201+07	1
13f955c0-ad27-4032-902b-a59cd22aad95	e5f76396a2defba721d8284049b7fb4cf13c041841b4cd76bf56cd75984e17c8	2023-12-11 22:00:43.4396+07	20231211150043_test	\N	\N	2023-12-11 22:00:43.429636+07	1
03272a95-1fb1-4213-b3e3-4d9feb2dc3c7	95be891296f42806653cf988618870249be8fea1c69dcf37aa6b390eee7ea006	2024-01-01 17:50:46.224542+07	20240101105046_add_colymn_realfilename	\N	\N	2024-01-01 17:50:46.215276+07	1
14c4572d-161e-4401-b327-eedc43110eea	d086e2bed04ea7bf4cd86bb520480da07daf826daf38e293b306c50c1f34f6a5	2023-12-12 09:44:37.68672+07	20231212024437_revision_data_post	\N	\N	2023-12-12 09:44:37.662595+07	1
8a524005-fb47-4b5e-8234-83a3fbd96606	37d43a87fc43b0bc4404da4fb990c7fbdc49cbea71c2c9e561d4e80dcbdbb519	2023-12-12 10:25:16.668889+07	20231212032516_fix_type_table_data_post	\N	\N	2023-12-12 10:25:16.65033+07	1
84a9e254-20c3-4505-8c0a-b1f5b6eec91f	50d4b1fca28738f97f3e44563eee6acab1abe4a944e10527e8a4668ee46f8298	2023-12-17 21:09:49.187302+07	20231217140949_linkdrive	\N	\N	2023-12-17 21:09:49.173571+07	1
483025fd-b3fb-468b-8321-0e6897bc99ed	81828b2752e8be3a3eb3fe310403beef57cd20a20004c37cdffa6b703601139d	2024-01-03 08:58:40.201892+07	20240103015840_add_data_at	\N	\N	2024-01-03 08:58:40.18485+07	1
a28dafc1-af07-4251-a2ed-a344f93dc7e5	c00f5c8ef03a29368b15e39a1ae3b5a854769d703945b73fdfff77fe0add2ae8	2023-12-21 18:49:17.65297+07	20231221114917_bookpost	\N	\N	2023-12-21 18:49:17.580222+07	1
49987ff5-3297-4848-af20-ab7de876e058	4aa3a9a835558802e1298649b56778bca06951c4d04e5c0d38ca01d4d54b690f	2023-12-26 15:18:32.492765+07	20231226081832_add_year_column	\N	\N	2023-12-26 15:18:32.480219+07	1
409113d8-b736-456f-8d19-ee9c860d5e65	9a08c21282c03144d308451f625db0336fb1cd23717ff26cc54ccdf7b6956c0d	2023-12-26 15:32:13.981942+07	20231226083213_change_type_year	\N	\N	2023-12-26 15:32:13.966612+07	1
9e9bfda6-5765-41a3-a79c-74a869165eca	32c7dfeab2e79a2712c2b55478f2e7db667fcab03861fc25bacd37c926f4503e	2024-01-03 10:35:18.43276+07	20240103033518_change_type_date	\N	\N	2024-01-03 10:35:18.364467+07	1
e8160847-8fe5-4892-9967-9db2e59a4527	a2c3ab1d7b4b0ff2491d3bbe60e8eb877e783e5e6703665922e0c11aa84db467	2023-12-28 12:00:19.468413+07	20231228050019_add_release_data_post	\N	\N	2023-12-28 12:00:19.449882+07	1
3822b0ed-891c-43b9-bbc7-fc698e905cd2	4aaa3efa69a7b2b80bbec3e40064a04891b1599ca283f4c91ee1542a832f91b0	2024-01-10 16:31:06.721401+07	20240110093106_add_superadmin_table	\N	\N	2024-01-10 16:31:06.669107+07	1
\.


--
-- Name: BookPost BookPost_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BookPost"
    ADD CONSTRAINT "BookPost_pkey" PRIMARY KEY (id);


--
-- Name: DataPost DataPost_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."DataPost"
    ADD CONSTRAINT "DataPost_pkey" PRIMARY KEY (id);


--
-- Name: SuperAdmin SuperAdmin_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SuperAdmin"
    ADD CONSTRAINT "SuperAdmin_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: BookPost_title_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "BookPost_title_key" ON public."BookPost" USING btree (title);


--
-- Name: DataPost_title_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "DataPost_title_key" ON public."DataPost" USING btree (title);


--
-- Name: SuperAdmin_username_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "SuperAdmin_username_key" ON public."SuperAdmin" USING btree (username);


--
-- Name: User_username_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_username_key" ON public."User" USING btree (username);


--
-- Name: BookPost BookPost_uploaderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BookPost"
    ADD CONSTRAINT "BookPost_uploaderId_fkey" FOREIGN KEY ("uploaderId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: DataPost DataPost_uploaderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."DataPost"
    ADD CONSTRAINT "DataPost_uploaderId_fkey" FOREIGN KEY ("uploaderId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

